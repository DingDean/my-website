/** articles */
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path')
const fetchArticles = require(path.resolve(__dirname, '../utils/fetchPreviewList.js'))

var cache = null

router.get('/', (req, res) => {
  if (cache)
    return res.send(cache)
  fetchArticles.scan(path.resolve(process.env.ATCINDEX, './index.md'), (err, articles) => {
    if (err)
      return res.status(500).end(err)
    res.send(articles)
  })
})

router.get('/:id', (req, res) => {
  fs.readFile(path.resolve(__dirname,'../README.md'), 'utf8', (err, data) => {
    if (err)
    {
      console.log(err)
    }
    res.send({content: data})
  })
})

module.exports = router
