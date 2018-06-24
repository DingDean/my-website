const express = require('express')
const router = express.Router()
const webPush = require('web-push');
const Musics = require('../modules/database/models/musics.js')
const helper = require('./sw.helper.js')

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log('Environment varibles VAPID_PUBLIC_KEY || VAPID_PRIVATE_KEY not found');
  let {publicKey, privateKey} = webPush.generateVAPIDKeys()
  if (!publicKey || !privateKey)
    throw new Error('Failed to auto generate VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY')
  process.env.VAPID_PUBLIC_KEY = publicKey
  process.env.VAPID_PRIVATE_KEY = privateKey
  console.log("The following keys are generated for you, it's advised to save them properly")
  console.log(`VAPID_PUBLIC_KEY: ${publicKey}`)
  console.log(`VAPID_PRIVATE_KEY: ${privateKey}`)
}

webPush.setVapidDetails(
  'http://localhost:3000',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

router.get('/vapidPublicKey', function (req, res) {
  res.send(process.env.VAPID_PUBLIC_KEY)
})

let users = []
router.post('/register', function (req, res) {
  let {subscription} = req.body
  if (!subscription)
    return res.sendStatus(400)
  let {endpoint} = subscription
  if (!users[endpoint])
    users[endpoint] = subscription
  res.sendStatus(201)
})

router.post('/unregister', function (req, res) {
  let {subscription} = req.body
  if (!subscription)
    return res.sendStatus(400)

  let {endpoint} = subscription
  if (users[endpoint])
    delete users[endpoint]
  res.sendStatus(201)
})

let musicCache
async function getMusicCache (Musics) {
  try {
    musicCache = await helper.makeMusicList(Musics)
  } catch (e) {
    console.log('Failed to get music cache: ' + e)
    musicCache = []
  }
}
getMusicCache(Musics)
router.post('/musicShare', async function (req, res) {
  let {url, thought} = req.body
  console.log(url)
  let {musicId} = helper.parseNeteaseMusic(url)

  let doc = new Musics({musicId, thought, date: new Date()})
  try {
    let result = await doc.save()
    let tweet = helper.fromDbtoMusic(result)
    if (musicCache[0].length < 5)
      musicCache[0].push(tweet)
    else
      musicCache.push([tweet])

    let pushOptions = helper.makeRichMsg(thought)
    for (let endpoint in users) {
      let subscription = users[endpoint]
      webPush.sendNotification(subscription, pushOptions)
      .then(function () {
      }).catch(function (e) {
        console.error('push music error: ' + e)
        delete users[endpoint]
      })
    }

    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

router.get('/musicList/:page', async function (req, res) {
  let page = Number(req.params.page)
  if (isNaN(page))
    return res.sendStatus(400)
  if (!musicCache) {
    musicCache = await helper.makeMusicList(Musics)
  }
  let list = musicCache[page] || []
  let isMore = musicCache[page+1] !== undefined
  res.send({list, isMore})
})

module.exports = router
