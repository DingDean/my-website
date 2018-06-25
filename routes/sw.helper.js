function parseNeteaseMusic (text) {
  // let artist = text.match(/分享(\w+)的/)[1]
  // let songtrack = text.match(/《(\w+)》/)[1]
  let musicId = text.match(/(\d+)\/\?userid/)[1]
  // return {artist, songtrack, musicId}
  return {musicId}
}

function makeRichMsg (thought) {
  let options = {
    title: '二向箔-分享音乐',
    body: thought,
    actions: [
      {action: 'listen', title: '收听'}
    ]
  }
  return JSON.stringify(options)
}


module.exports = {
  parseNeteaseMusic,
  makeRichMsg
}
