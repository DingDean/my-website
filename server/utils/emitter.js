const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter()

const events = {
  RPOST: 'refresh post',
  RDOUBAN: 'refresh douban'
}

module.exports = {emitter, events}
