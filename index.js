const express = require('express')
const compression = require('compression')
const app = express()
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
require('dotenv').config()


app.use(compression())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('connect-history-api-fallback')())
app.use('/static', express.static(path.resolve(__dirname, './pwa/dist')))
app.use('/', express.static(path.resolve(__dirname, './pwa/dist')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './pwa/dist/index.html'))
});

let port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server is listen on port ' + port)
});
