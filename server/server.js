const express = require('express')
const compression = require('compression')
const app = express()
const path = require('path')
const fs = require('fs')
const routes = require('./routes/routes.config.js')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost/test')
const mdb = mongoose.connection

handleMongo(mdb)

app.use(compression())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('connect-history-api-fallback')())
app.use('/static', express.static(path.resolve(__dirname, '../dist/static')))
app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
});

routes.forEach(route => app.use(route.path, require(route.module)))

app.listen(3000, function () {
  console.log('服务器准备完毕,等待连接请求...')
});

function handleMongo (db) {
  db.on('error', (err) => {
    console.log('数据库连接失败', err)
  })

  db.once('open', () => {
    console.log('数据库连接正常')
  })
}

