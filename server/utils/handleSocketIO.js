const zmq = require('zeromq')
const pull = zmq.socket('pull')
pull.connect('tcp://localhost:8002')


var API = function (io) {
  var _crtTweet = null;
  var self = this;

  this.b_tweets = function (tweet) {
    _crtTweet = JSON.parse(tweet)
    let content = _crtTweet.Tweet;
    let time = _crtTweet.Stamp;
    let cd = 100 * Number(_crtTweet.Cd);
    io.emit('twitter', _crtTweet)
    setTimeout(() => {
      io.emit('burn', cd)
      _crtTweet = null
    }, cd * 1000)
  }

  this.sync_tweet = function (socket) {
    if (!_crtTweet)
      return;
    socket.emit('twitter', _crtTweet)
  }
}

module.exports = function (io) {
  let api = new API(io)
  io.on('connection', socket => {
    console.log('A user connected')
    socket.on('sync', () => {
      console.log('user request syncronization');
      api.sync_tweet(socket)
    })
    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })
  })
  return api;
}
