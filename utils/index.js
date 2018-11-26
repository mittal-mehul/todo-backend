const { RESPONSE_MSG, RESPONSE_STATUS } = require('../constants')

const setResponse = (response, options) => {
  switch (options.status) {
    case RESPONSE_STATUS.BAD_REQUEST:
      options.message = RESPONSE_MSG.BAD_REQUEST
      break
    case RESPONSE_STATUS.UNAUTHORISED:
      options.message = RESPONSE_MSG.UNAUTHORISED
      break
    case RESPONSE_STATUS.FORBIDDEN:
      options.message = RESPONSE_MSG.FORBIDDEN
      break
    case RESPONSE_STATUS.NOT_FOUND:
      options.message = RESPONSE_MSG.NOT_FOUND
      break
    case RESPONSE_STATUS.NOT_GOOD:
      options.message = RESPONSE_MSG.NOT_GOOD
      break
    default:
      options.message = RESPONSE_MSG.SUCCESS
  }

  response.status(options.status || RESPONSE_STATUS.OK)
  response.json({
    data: options.data || {},
    meta: {
      message: options.message,
      detail: options.detail
    }
  })
}

module.exports = {
  setResponse
}