const net = require('net')
const emitter = require('./emitter.js')

const server = net.createServer( c => {
  c.on('data', buffer => {
    let data = JSON.parse(buffer)
    if (data.event = 'refresh') {
      emitter.emit('refresh')
    }
  })
})

server.on('error', err => {
  throw(err)
})

server.listen(process.env.CONTROL_PORT, () => {
  console.log("Controller server ready on port", process.env.CONTROL_PORT)
})
