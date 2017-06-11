/** articles */
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path')
const db_articles = require(path.resolve(__dirname, '../data/articles.db.js'))
const zmq = require('zeromq')
const pull = zmq.socket('pull')
pull.connect('tcp://localhost:8001')

var _preview_list = []
var _articles = []

refresh()

pull.on('message', (msg) => {
  msg = JSON.parse(msg)
  if (msg.event == 'refresh')
  {
    console.log('刷新文章列表')
    refresh()
  }
})

router.get('/', (req, res) => {
    res.send({list: _preview_list.reverse()})
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  let article = _articles.find(ele => ele.ref == id)
  if (article)
    return res.send({content :article.content})
  res.status(404).end()
})

function genPreviewList (docs) {
  return docs.map(ele => {
    return {
      title: ele.title,
      summary: ele.summary,
      ref: ele.ref
    }
  })
}

function refresh() {
  db_articles.find({}, (err, docs) => {
    if (err)
      return console.log(err)
    if (!docs)
      return console.log('no articles yet')
    _articles = docs
    _preview_list = genPreviewList(docs)
  })
}

module.exports = router
