const db = require('../models')
const createTask = async ({ title, description, createdAt }) => {
  const newTask = new db.task({
    title,
    description,
    createdAt
  })
  const result = await newTask.save()
  return result
}

const editTask = async ({ id, title, description, createdAt, isCompleted }) => {  
  const result = await db.task.findByIdAndUpdate( id, { 
    $set: { 
      title,
      description,
      createdAt,
      isCompleted 
    } 
  }, 
  { new: true })

  return result
}

const getTasks = async ({ id, isCompleted }) => {
  const where = {}
  id && (where._id = id)
  isCompleted && (where.isCompleted = isCompleted)
  const result = await db.task.find(where)
  return result
}

const deleteTask = async ({ id, ids }) => {
  let result = {}
  if(id) {
    result = await db.task.findByIdAndDelete(id)
  }
  else {
    result = await db.task.deleteMany({ _id: {$in: ids }})
  }
  return result
}

const markDone = async ({ id, ids }) => {
  let result = {}
  if(id) {
    result = await db.task.findByIdAndUpdate(id, { $set: { isCompleted: true }}, { new: true })
  }
  else {
    result = await db.task.updateMany({ _id: {$in: ids }}, { $set: { isCompleted: true }})
  }
  return result
}

module.exports = {
  createTask,
  editTask,
  getTasks,
  deleteTask,
  markDone
}