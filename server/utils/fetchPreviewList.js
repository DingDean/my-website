const fs = require('fs')
const path = require('path')

function fetchList () {
  var previewList = {};
  var self = this;

  this.scan = function (file, callback) {
    fs.readFile(file, 'utf8', (err, buffer) => {
      if (err)
        return callback(err)
      buffer = buffer.split('\n').filter(ele => ele != '')
      let len = buffer.length;
      let list = {};
      let pointer = null;
      for (let i=0;i<len;i++)
      {
        let ct = buffer[i]
        if (/^#/.test(ct))
        {
          let section = ct.split('').filter(ele => ele != '#' && ele != ' ').join('')
          list[section] = []
          pointer = section
        }
        if (/\d/.test(ct))
        {
          let article = self.extractArticleInfo(ct)
          list[pointer].push(article)
        }
      }
      previewList = list
      if (callback)
        callback(err, list)
    })
  }

  this.get = function () {return previewList;}

  this.extractArticleInfo = function (buffer) {
    buffer = buffer.split('^')
    let title = buffer[0].trim().match(/\[(.*)\]/)[1]
    let summary = buffer[1].trim()
    let id = buffer[2].trim()
    return {title, summary, id}
  }
}

module.exports = new fetchList()
