/** articles */
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path')
const mongoose = require('mongoose')
const schema = mongoose.Schema
const db_articles = mongoose.model('articles', new schema({}), 'articles')


var _preview_list = null
var _idToTitle = {}
var articles = {}

db_articles.find({}, (err, docs) => {
  if (err)
    return console.log(err)
  if (!docs)
    return console.log('no articles yet')
  docs.forEach(doc => {

  })
})


router.get('/', (req, res) => {
  if (_preview_list)
    return res.send(_preview_list)
  fetch((err, articles) => {
    if (err)
      return res.status(500).end(err)
    _preview_list = articles
    res.send(articles)
  })
})

router.get('/:id', (req, res) => {
  if (!_idToTitle)
    return res.status(500).end()

  let id = req.params.id
  if (articles[id])
    return res.send({content :articles[id]})

  let filePath = path.resolve(process.env.ATCINDEX, `${_idToTitle[id]}.md`)
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err)
      return res.status(404).end()
    articles[id] = data
    res.send({content: data})
  })
})

module.exports = router
