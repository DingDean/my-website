const db = require('../data/twitter.db.js')
const zmq = require('zeromq')
const pull = zmq.socket('pull')
pull.connect('tcp://localhost:8002')

module.exports = function (io) {
  pull.on('message', msg => {
    io.b_tweets(msg)
    save(msg, err => {
      if (err)
        console.log('保存微博出错', err)
    })
  })
}

function save (msg, cb) {
  let t = new db({
    content: msg.Tweet,
    createTime: Date.now()
  })
  t.save(cb)
}
