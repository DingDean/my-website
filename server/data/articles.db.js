const mongoose = require('mongoose')
const schema = mongoose.Schema
const db_articles = mongoose.model('articles', new schema({
  section: String,
  title: String,
  summary: String,
  content: String,
  ref: String,
  createTime: Number,
  lastModified: Number
}), 'articles')

module.exports = db_articles

