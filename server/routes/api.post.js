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

var _cache = {}

router.get('/articles', (req, res) => {
  if (_cache.articles) {
    res.status(200).send(_cache.articles)
  } else {
    newArticles.find({}).sort({ctime: -1}).exec((err, docs) => {
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
    newArticles.findOne({inode: Number(id)}, (err, doc) => {
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
  newArticles.find({}).sort({ctime: -1}).limit(1).exec((err, file) => {
    res.send({post: file[0]})
  })
})


module.exports = router
