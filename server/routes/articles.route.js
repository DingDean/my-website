/** articles */
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path')
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

var _preview_list = []
var _articles = []

db_articles.find({}, (err, docs) => {
  if (err)
    return console.log(err)
  if (!docs)
    return console.log('no articles yet')
  _articles = docs
  let len = docs.length
  for (let i=0;i<len;i++)
  {
    let doc = docs[i]
    _preview_list.push({
      title: doc.title,
      summary: doc.summary,
      ref: doc.ref
    })
  }
})

router.get('/', (req, res) => {
    res.send({list: _preview_list})
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  let article = _articles.find(ele => ele.ref == id)
  if (article)
    return res.send({content :article.content})
  res.status(404).end()
})

module.exports = router
