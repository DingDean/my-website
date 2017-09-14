const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
var newArticleSchema = mongoose.Schema({
    author:   { type: String, default: '' },
    title:    { type: String, required: true },
    summary:  { type: String, default: '' },
    content:  { type: String, required: true },
    ctime:    { type: Date, default: Date.now },
    mtime:    { type: Date, defualt: Date.now },
    inode:    { type: Number, unique: true, required: true }
});
var newArticles = mongoose.model('articles', newArticleSchema)
const emitter = require('../utils/emitter.js')

var _cache = {}

emitter.on('refresh', () => {
  console.log('refreshing cache')
  _cache = {}
  getArticles((err, docs) => {
    if (err)
      throw(err)
    _cache.articles = {list: docs}
  })
  getRecentPost((err, doc) => {
    if (err)
      throw(err)
    _cache.recentpost = {post: doc[0]}
  })
})

router.get('/articles', (req, res) => {
  if (_cache.articles) {
    res.status(200).send(_cache.articles)
  } else {
    getArticles((err, docs) => {
      if (err)
        res.status(404).end()
      else
      {
        _cache.articles = {list: docs}
        res.status(200).send(_cache.articles)
      }
    })
  }
})
router.get('/articles/:articleId', (req, res) => {
  let id = req.params.articleId
  if (_cache[id]) {
    res.status(200).send(_cache[id])
  } else {
    getArticle(id, (err, doc) => {
      if (err)
        res.status(404).end()
      else
      {
        _cache[id] = doc
        res.status(200).send(_cache[id])
      }
    })

  }
})
router.get('/recentpost', (req, res) => {
  if (_cache.recentpost) {
    res.status(200).send(_cache.recentpost)
  } else {
    getRecentPost((err, file) => {
      _cache.recentpost = {post: file[0]}
      res.send(_cache.recentpost)
    })
  }
})

function getArticles (cb) {
  newArticles.find({}).sort({ctime: -1}).exec(cb)
}

function getArticle (id, cb) {
  newArticles.findOne({inode: Number(id)}, cb)
}

function getRecentPost (cb) {
  newArticles.find({}).sort({ctime: -1}).limit(1).exec(cb)
}


module.exports = router
