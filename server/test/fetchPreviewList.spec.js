const expect = require('expect.js')
const targetFactory = require('../utils/fetchPreviewList.js')

describe('fetchPreviewList获得文章预览列表', function () {
  var target
  let location = "/Users/nagedk/Documents/MyArticles/articles"
  before(function () {
    target = new targetFactory(location)
  })

  it('scan获取文章名列表', function () {
    target.scan()
    setTimeout(()=> {
      expect(target.get()).to.eql(["welcome_01.md"])
    }, 1000)
  })
})
