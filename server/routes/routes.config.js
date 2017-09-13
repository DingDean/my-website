const path = require('path')

module.exports = [
  //{path: '/api/douban', module: path.resolve(__dirname, './api.douban.js')},
  {path: '/api/blog', module: path.resolve(__dirname, './api.post.js')}
]
