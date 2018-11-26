const { RESPONSE_STATUS } = require('../constants')
const { setResponse } = require('../utils')
const taskService = require('../services/task')

const createTask = async (request, response) => {
  try{
    const options = request.body
    const newTask = await taskService.createTask(options)
    setResponse(response, {
      status: RESPONSE_STATUS.OK,
      data: newTask
    })
  }catch(exception) {
    console.log(exception)
    setResponse(response, {
      status: RESPONSE_STATUS.NOT_GOOD,
      detail: exception
    })
  }
}

module.exports = {
  createTask
}