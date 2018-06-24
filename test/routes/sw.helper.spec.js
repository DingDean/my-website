const mocha = require('mocha')
const target = require('../../routes/sw.helper.js')
const assert = require('assert')

describe('parseNeteaseMusic', function () {
  const cases = [
    {
      text: '分享Therion的单曲《Une fleur dans le coeur》: http://music.163.com/song/27184383/?userid=5719655 (来自@网易云音乐)',
      result: {
        // artist: 'Therion',
        // songtrack: 'Une fleur dan le coeur',
        musicId: '27184383'
      }
    },
    {
      text: '分享中文乐队的单曲《中文歌曲名》: http://music.163.com/song/27184383/?userid=5719655 (来自@网易云音乐)',
      result: {
        // artist: '中文乐队',
        // songtrack: '中文歌曲名',
        musicId: '27184383'
      }
    }
  ]

  cases.forEach(function (mock, index) {
    describe(`case ${index}`, function () {
      let result

      before(function () {
        let text = mock.text
        result = target.parseNeteaseMusic(text)
      })

      // it('should get the artist name', function () {
      //   let actual = result.artist
      //   let expect = mock.result.artist
      //   assert.equal(actual, expect)
      // })

      // it('should get the songtrack', function () {
      //   let actual = result.songtrack
      //   let expect = mock.result.songtrack
      //   assert.equal(actual, expect)
      // })

      it('should get the musicId', function () {
        let actual = result.musicId
        let expect = mock.result.musicId
        assert.strictEqual(actual, expect)
      })
    })
  })
})
