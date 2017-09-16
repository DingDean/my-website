const net = require('net')
const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter()

const events = {
  RPOST: 'refresh post',
  RDOUBAN: 'refresh douban'
}

const server = net.createServer( c => {
  c.on('data', buffer => {
    let msg = JSON.parse(buffer)
    let event = msg.event
    let data = msg.data
    // 中转事件
    emitter.emit(event, data)
  })
})

server.on('error', err => {
  throw(err)
})

server.listen(process.env.CONTROL_PORT, () => {
  console.log("Controller server ready on port", process.env.CONTROL_PORT)
})

module.exports = {emitter, events}
