const fs = require('fs')
const path = require('path')

function fetchList () {
  var previewList = [];
  var self = this;

  this.scan = function () {
    fs.readFile(path.resolve(process.env.ATCINDEX,'./index.md'), 'utf8', (err, buffer) => {
      if (err)
        return console.log(err)
      buffer = buffer.split('\n').filter(ele => ele != '')
      console.log(buffer)
      let len = buffer.length;
      let list = {};
      let pointer = null;
      for (let i=0;i<len;i++)
      {
        let ct = buffer[i]
        if (/^#/.test(ct))
        {
          let name = ct.split('').filter(ele => ele != '#' && ele != ' ').join('')
          list[name] = []
          pointer = name
        }
        if (/\d/.test(ct))
        {
          let name = ct.split('').filter(ele => ele != ' ').join('')
          list[pointer].push(name)
        }
        console.log(list)
      }
    })
  }

  this.get = function () {return previewList;}

  this.extractArticleInfo = function (buffer) {
    buffer = buffer.split('^')
    let title = buffer[0].trim()
    let summary = buffer[1].trim()
    let id = buffer[2].trim()
    return {title, summary, id}
  }
}

module.exports = new fetchList()
