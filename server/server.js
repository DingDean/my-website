const express = require('express')
const compression = require('compression')
const app = express()
const path = require('path')
const fs = require('fs')
const routes = require('./routes/routes.config.js')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

// Mongodb Connection
mongoose.connect(process.env.DB_LOC, {userMongoClient: true})
const db = mongoose.connection
const handleMongo = require('./utils/handleMongo.js')
handleMongo(db)

// SocketIO connection
const http = require('http').Server(app)
const io = require('socket.io')(http)
const handleSocket = require('./utils/handleSocketIO.js')
const ioAPI = handleSocket(io)

// Attach socketio and db to Zeromq Backdoor
const handleZmq = require('./utils/handleZero.js')
handleZmq(ioAPI)

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

http.listen(process.env.PORT || 3000, function () {
  console.log('服务器准备完毕,等待连接请求...')
});
