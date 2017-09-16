const express = require('express')
const router = express.Router()
const fs = require('fs');
const path = require('path')
const scrapeIt = require('scrape-it')
const { emitter, events } = require('../utils/handleTcp.js')

var _localState = {};

(function () {
  getMyReadingList(list => {
    _localState = list
  });
  // 每天凌晨更新阅读列表
  setTimeout(() => {
    getMyReadingList(list => {_localState = list})
    setInterval(() => {
      getMyReadingList(list => {_localState = list})
    }, 24 * 60 * 60 * 1000)
  }, getSecondsTillMidnight())
})()

emitter.on(events.RDOUBAN, data => {
  getMyReadingList(list => {_localState = list})
  console.log('douban reading list is refreshed')
})

function getSecondsTillMidnight () {
  let date = new Date();
  date.setDate(date.getDate() + 1)
  date.setHours(0,0,0,0)
  return date - Date.now()
}

function getMyReadingList (cb) {
  if (cb === undefined)
    return console.log('getMyReadingList callback needed');
  scrapeIt("https://book.douban.com/people/deanacroic/do", {
    books: {
      listItem: '.interest-list .subject-item',
      data: {
        title: '.info h2 a',
        desc: '.info .pub',
        link: {
          selector: '.pic a',
          attr: 'href'
        },
        pic: {
          selector: '.pic a img',
          attr: 'src'
        }
      }
    }
  }).then(page => {
    console.log('Douban booklist is scraped')
    cb(page)
  }).catch(err => {
    console.log(err)
  });
}

router.get('/list/do', (req, res) => {
  res.status(200).json(_localState)
})

module.exports = router;
