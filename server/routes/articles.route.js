/** articles */
const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path')

router.get('/articles-list', (req, res) => {
  fs.readFile('../README.md', 'utf8', (err, data) => {
    res.send({articles: [
        {title: '标题一', content: '预览内容一', id: 'article_1'},
        {title: '标题二', content: '预览内容二', id: 'article_2'},
        {title: '标题三', content: '预览内容三', id: 'article_3'}
    ]})
  })
})

router.get('/articles/:id', (req, res) => {
  fs.readFile(path.resolve(__dirname,'../README.md'), 'utf8', (err, data) => {
    if (err)
    {
      console.log(err)
    }
    res.send({content: data})
  })
})

module.exports = router
