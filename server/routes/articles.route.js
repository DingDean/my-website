/** articles */
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path')
const fetchArticles = require(path.resolve(__dirname, '../utils/fetchPreviewList.js'))

var _preview_list = null
var _idToTitle = {}
var articles = {}

fetch((err, articles_list) => {
  if (err)
    return console.log(err)
  _preview_list = articles_list
  _idToTitle = idToTitle(articles_list)
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

function fetch (callback)
{
  fetchArticles.scan(path.resolve(process.env.ATCINDEX, './index.md'), callback)
}

function idToTitle (list)
{
  let idTitle = {}
  Object.getOwnPropertyNames(list).forEach(section => {
    let articles = list[section]
    articles.forEach(article => {
      idTitle[article.id] = article.title
    })
  })
  return idTitle
}

module.exports = router
