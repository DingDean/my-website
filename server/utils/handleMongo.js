module.exports = function (db) {
  db.on('error', (err) => {
    console.log('数据库连接失败', err)
  })

  db.once('open', () => {
    console.log('数据库连接正常')
  })
}
