const expect = require('expect.js')
const fs = require('fs')
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

  it('scan用一个index.md中抽取出文章列表', () => {
    const index_path = path.resolve(__dirname, './test_index.md')
    target.scan(index_path, (err, list) => {
      expect(list).to.eql({
        '栏目一': [
          {title: '文章一',summary: '预览一',id: '标签一'},
          {title: '文章二',summary: '预览二',id: '标签二'}
        ],
        '栏目二': [
          {title: '文章三',summary: '预览三',id: '标签三'}
        ]
      })
    })
  });
})
