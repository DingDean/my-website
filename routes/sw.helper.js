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

function fromDbtoMusic (raw) {
  return {
    text: raw.thought,
    id: raw.musicId,
    ts: raw.date.getTime()
  }
}
async function makeMusicList (db) {
  try {
    let tweets = await db.find().limit(50).sort({date: -1}).exec()
    let transformed =  tweets.map(e => {
      return fromDbtoMusic(e)
    })

    let list = []
    let index = 0
    for (let tweet of transformed) {
      if (list[index] === undefined) {
        list[index] = [tweet]
      } else if (list[index].length < 5) {
        list[index].push(tweet)
      } else {
        index++
        list[index] = [tweet]
      }
    }
    return list
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  parseNeteaseMusic,
  makeRichMsg,
  makeMusicList,
  fromDbtoMusic
}
