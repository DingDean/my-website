const path = require('path')

module.exports = [
  {path: '/articles', module: path.resolve(__dirname, './articles.route.js')}
]
