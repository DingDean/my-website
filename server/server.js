const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const routes = require('./routes/routes.config.js')
const util = require('./utils/fetchPreviewList')

app.use('/static', express.static(path.resolve(__dirname, '../dist/static')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
});

routes.forEach(route => app.use(route.path, require(route.module)))

app.listen(3000, function () {
  console.log('server is ready')
});
