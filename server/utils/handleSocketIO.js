const zmq = require('zeromq')
const pull = zmq.socket('pull')
pull.connect('tcp://localhost:8002')

module.exports = function (io) {
  pull.on('message', msg => {
    msg = JSON.parse(msg)
    io.emit('twitter', msg)
    setTimeout(() => {
      io.emit('burn')
    }, 8000)
  })

  io.on('connection', socket => {
    console.log('A user connected')
    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })
  })
}
