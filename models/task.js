const mongoose = require('mongoose') 
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: Object,
    required: false
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: String,
    default: Date.now
  }
})

const task = mongoose.model('task', taskSchema)
module.exports = task