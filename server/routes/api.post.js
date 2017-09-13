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

router.get('/articles', (req, res) => {
  newArticles.find({}).sort({ctime: 1}).exec((err, docs) => {
    if (err)
      res.status(404).end()
    else
      res.status(200).send({list: docs})
    })
})
router.get('/articles/:articleId', (req, res) => {
  newArticles.findOne({inode: Number(req.params.articleId)}, (err, doc) => {
    if (err)
      res.status(404).end()
    else
      res.status(200).send(doc)
  })
})
router.get('/recentpost', (req, res) => {
  newArticles.find({}).sort({mtime: 1}).limit(1).exec((err, file) => {
    res.send({post: file[0]})
  })
})


module.exports = router
