const express = require('express')
const compression = require('compression')
const app = express()
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
require('dotenv').config()
const routers = require('./routes')

/* MongoDB */
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_LOC, {
  useMongoClient: true,
  keepAlive: 120
}).then(() => {
  console.log('connected to database')
}).catch(err => {
  throw new Error(err)
})

/* Setup Routes */
app.use(compression())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('connect-history-api-fallback')())
// app.use('/static', express.static(path.resolve(__dirname, './pwa/dist')))
app.use('/', express.static(path.resolve(__dirname, './pwa/dist')))


app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './pwa/dist/index.html'))
});

routers.forEach(function ({path, route}) {
  app.use(path, require(route))
})

let port = process.env.PORT || 3000
app.listen(port, '0.0.0.0', function () {
  console.log('Server is listen on port ' + port)
});
