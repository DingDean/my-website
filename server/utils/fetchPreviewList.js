const fs = require('fs')

module.exports = function (location) {
  var previewList = [];
  var self = this;

  this.scan = function () {
    fs.readdir(location, 'utf8', (err, files) => {
      if (err)
        console.log('Error')
      else
        previewList = files
    })
  }

  this.get = function () {return previewList;}
}
