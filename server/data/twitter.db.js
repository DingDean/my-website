const mongoose = require('mongoose')
const schema = mongoose.Schema
const db_tweets = mongoose.model('tweets', new schema({
  content:    String,
  createTime: Number
}))

module.exports = db_tweets

