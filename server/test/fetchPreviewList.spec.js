const expect = require('expect.js')
const path = require('path')
const target = require(path.resolve(__dirname, '../utils/fetchPreviewList'))

describe('fetchPreviewList获得文章预览列表', function () {
  it('extractArticleInfo从一个行字符串中抽取文章信息', function () {
    var buffer = '1.[技术分享一](技术分享一)^这是对技术分享一这篇文章的概述^tech_review_01'
    var result = {
      title: '技术分享一',
      summary: '这是对技术分享一这篇文章的概述',
      id: 'tech_review_01'
    }
    expect(target.extractArticleInfo(buffer)).to.eql(result);
  })
})
