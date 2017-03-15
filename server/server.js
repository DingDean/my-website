const express = require('express')
const app = express();
const path = require('path')

app.use('/static', express.static(path.resolve(__dirname, '../dist/static')))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
});

app.get('/articles', function (req, res) {
  setTimeout(() => {
    res.send({articles: [{content: '~~划掉划掉~~', id:'1'}]})
  }, 2000)
})

app.listen(3000, function () {
  console.log('server is ready')
});
