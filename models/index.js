const task = require('./task')
const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.set('useFindAndModify', false) // to use findOne and update and not findAndModify
module.exports = {
  task
}