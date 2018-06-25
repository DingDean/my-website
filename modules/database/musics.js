const mongoose = require('mongoose')

const Musics = mongoose.model('MusicTweet', mongoose.Schema({
  thought: String,
  musicId: Number,
  date: {type: Date, default: Date.now}
}))

async function save (musicId, thought) {
  let doc = new Musics({musicId, thought, date: new Date()})
  try {
    let cache = await getTweets()
    let result = await doc.save()
    let tweet = fromDbtoTweet(result)
    if (cache[0].length < 5)
      cache[0].unshift(tweet)
    else
      cache.unshift([tweet])
    return tweet
  } catch (e) {
    throw (e)
  }
}

function fromDbtoTweet (raw) {
  return {
    text: raw.thought,
    id: raw.musicId,
    ts: raw.date.getTime()
  }
}

let cache = null
async function getTweets () {
  if (cache)
    return cache
  try {
    let tweets = await Musics.find().limit(50).sort({date: -1}).exec()
    let transformed =  tweets.map(e => {
      return fromDbtoTweet(e)
    })

    let list = []
    let index = 0
    for (let tweet of transformed) {
      if (list[index] === undefined) {
        list[index] = [tweet]
      } else if (list[index].length < 5) {
        list[index].push(tweet)
      } else {
        index++
        list[index] = [tweet]
      }
    }
    cache = list
    return cache
  } catch(e) {
    throw (e)
  }
}

module.exports = {
  save,
  getTweets
}
