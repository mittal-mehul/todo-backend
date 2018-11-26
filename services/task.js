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

const editTask = async ({ id, title, description, createdAt }) => {  
  const result = await db.task.findByIdAndUpdate( id, { 
    $set: { 
      title,
      description,
      createdAt 
    } 
  }, 
  { new: true })

  return result
}
module.exports = {
  createTask,
  editTask
}