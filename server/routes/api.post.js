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

router.get('/articles/:articleId', (req, res) => {
  newArticles.findOne({inode: Number(req.params.articleId)}, (err, doc) => {
    if (err)
      res.status(404).end()
    else
      res.status(200).send(doc)
  })
})

router.get('/articles', (req, res) => {
  newArticles.find({}, (err, docs) => {
    if (err)
      res.status(404).end()
    else
      res.status(200).send({list: docs})
    })
})


module.exports = router
