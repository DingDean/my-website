const mongoose = require('mongoose')

const Subs = mongoose.model('Subscriptions', mongoose.Schema({
  endpoint: String,
  keys: {
    auth: String,
    p256dh: String
  }
}))

async function save (subs) {
  let {endpoint} = subs

  try{
    let cache = await get()
    if (cache[endpoint])
      return;
    let doc = new Subs(subs)
    await doc.save()
    cache[endpoint] = subs
  } catch(e) {
    throw(e)
  }
}

let cache = null
async function get () {
  if (cache)
    return cache
  cache = await Subs.find().exec()
  return cache
}
module.exports = {
  save,
  get
}
