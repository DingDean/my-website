/** articles */
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path')
const fetchArticles = require(path.resolve(__dirname, '../utils/fetchPreviewList.js'))

var cache_fr = null
var cache_sv = {}
var articles = {}

fetch((err, articles) => {
  if (err)
    return console.log(err)
  cache_fr = articles
  cache_sv = idToTitle(articles)
})

router.get('/', (req, res) => {
  if (cache_fr)
    return res.send(cache_fr)
  fetch((err, articles) => {
    if (err)
      return res.status(500).end(err)
    res.send(articles)
  })
})

router.get('/:id', (req, res) => {
  if (!cache_sv)
    return res.status(500).end()
  let id = req.params.id
  if (articles[id])
    return res.send(articles[id])
  let filePath = path.resolve(process.env.ATCINDEX, `${cache_sv[id]}.md`)
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err)
      return res.status(404).end()
    res.send({content: data})
    articles[id] = data
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
