const mongoose = require('mongoose')

const MusicTweet = mongoose.model('MusicTweet', mongoose.Schema({
  thought: String,
  musicId: Number,
  date: {type: Date, default: Date.now}
}))

module.exports = MusicTweet
