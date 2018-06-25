const express = require('express')
const router = express.Router()
const webPush = require('web-push');
const Musics = require('../modules/database/musics.js')
const Subscriptions = require('../modules/database/subscriptions.js')
const helper = require('./sw.helper.js')
const bounce = require('bounce')
const uuid = require('uuid/v4')

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

if (!process.env.PASSWORD) {
  console.log('Environment variables PASSWORD not found')
  let pwd = uuid()
  console.log("The following password is generated for you, it's advised to save it properly")
  process.env.PASSWORD = pwd
  console.log(`PASSWORD: ${pwd}`)
} else {
  console.log(process.env.PASSWORD)
}

webPush.setVapidDetails(
  'http://localhost:3000',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

router.get('/vapidPublicKey', function (req, res) {
  res.send(process.env.VAPID_PUBLIC_KEY)
})

router.post('/register', async function (req, res) {
  let {subscription} = req.body
  if (!subscription)
    return res.sendStatus(400)

  try {
    await Subscriptions.save(subscription)
    res.sendStatus(201)
  } catch (e) {
    bounce.rethrow(e, 'system')
    res.sendStatus(500)
  }
})

// router.post('/unregister', function (req, res) {
//   let {subscription} = req.body
//   if (!subscription)
//     return res.sendStatus(400)

//   let {endpoint} = subscription
//   if (users[endpoint])
//     delete users[endpoint]
//   res.sendStatus(201)
// })
router.post('/musicShare', async function (req, res) {
  let {url, thought, pwd} = req.body
  if (pwd != process.env.PASSWORD)
    return res.sendStatus(400);
  let {musicId} = helper.parseNeteaseMusic(url)

  try {
    let result = await Musics.save(musicId, thought)

    let pushOptions = helper.makeRichMsg(thought)
    let users = await Subscriptions.get()
    for (let endpoint in users) {
      let subscription = users[endpoint]
      webPush.sendNotification(subscription, pushOptions)
      .catch(function (e) {
        console.error('push music error: ' + e)
      })
    }

    res.sendStatus(201)
  } catch (err) {
    res.sendStatus(500)
    bounce.rethrow(err, 'system')
  }
})

router.get('/musicList/:page', async function (req, res) {
  let page = Number(req.params.page)
  if (isNaN(page))
    return res.sendStatus(400)
  let cache = await Musics.getTweets()
  let list = cache[page] || []
  let isMore = cache[page+1] !== undefined
  res.send({list, isMore})
})

module.exports = router
