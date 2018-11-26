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
module.exports = {
  createTask
}