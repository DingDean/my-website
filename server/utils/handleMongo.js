const mongoose = require('mongoose')
mongoose.connect(process.env.DB_LOC)
const db = mongoose.connection
mongoose.Promise = global.Promise
db.on('error', err => console.log(err))
db.once('open', () => console.log('数据库连接成功'))

module.exports = db
