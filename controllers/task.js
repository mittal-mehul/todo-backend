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

const editTask = async (request, response) => {
  try{
    const options = request.body
    if(!options.id) {
      setResponse(response,{
        status: RESPONSE_STATUS.BAD_REQUEST,
        detail: 'Required Param \'id\''
      })
      return
    }
    const editedTask = await taskService.editTask(options)
    setResponse(response, {
      status: RESPONSE_STATUS.OK,
      data: editedTask
    })
  }catch(exception) {
    console.log(exception)
    setResponse(response, {
      status: RESPONSE_STATUS.NOT_GOOD,
      detail: exception
    })
  }
}

const getTasks = async (request, response) => {
  try{
    const options = request.query
    const tasks = await taskService.getTasks(options)
    setResponse(response, {
      status: RESPONSE_STATUS.OK,
      data: tasks
    })
  }catch(exception) {
    console.log(exception)
    setResponse(response, {
      status: RESPONSE_STATUS.NOT_GOOD,
      detail: exception
    })
  }
}

const deleteTask = async (request, response) => {
  try{
    const options = request.body
    if(!options.id && (!options.ids || !options.ids.length)) {
      setResponse(response, {
        status: RESPONSE_STATUS.BAD_REQUEST,
        detail: 'At least one id is required'
      })
    }
    const result = await taskService.deleteTask(options)
    setResponse(response, {
      status: RESPONSE_STATUS.OK,
      data: result
    })
  }catch(exception) {
    console.log(exception)
    setResponse(response, {
      status: RESPONSE_STATUS.NOT_GOOD,
      detail: exception
    })
  }
}

const markDone = async (request, response) => {
  try{
    const options = request.body
    if(!options.id && (!options.ids || !options.ids.length)) {
      setResponse(response, {
        status: RESPONSE_STATUS.BAD_REQUEST,
        detail: 'At least one id is required'
      })
    }
    const result = await taskService.markDone(options)
    setResponse(response, {
      status: RESPONSE_STATUS.OK,
      data: result
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
  createTask,
  editTask,
  getTasks,
  deleteTask,
  markDone
}