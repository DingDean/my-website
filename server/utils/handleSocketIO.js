const zmq = require('zeromq')
const pull = zmq.socket('pull')
pull.connect('tcp://localhost:8002')

module.exports = function (io) {
  pull.on('message', msg => {
    msg = JSON.parse(msg)
    let content = msg.Tweet;
    let time = msg.Stamp;
    let cd = 100 * Number(msg.Cd);
    io.emit('twitter', msg)
    setTimeout(() => {
      io.emit('burn', cd)
    }, cd * 1000)
  })

  io.on('connection', socket => {
    console.log('A user connected')
    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })
  })
}
