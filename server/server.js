const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const varDef = require('./configs/server.variables.js')
const router = require('./routes/articles.route.js')

var md;
fs.readFile('./README.md', 'utf8', function (err, data) {
  md = data
});

app.use('/static', express.static(path.resolve(__dirname, '../dist/static')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
});

app.use('/', router)

app.listen(3000, function () {
  console.log('server is ready')
});
