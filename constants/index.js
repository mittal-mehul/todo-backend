const DATE_FORMAT = {
  DEFAULT: 'YYYY-MM-DD'
}

const RESPONSE_MSG = {
  SUCCESS: 'Request Succesful',
  BAD_REQUEST: 'That\'s a bad request',
  NOT_FOUND: 'We tried, but failed to find the requested',
  FORBIDDEN: 'We don\'t do that here',
  UNAUTHORISED: 'Not you sir!',
  OK: 'Request Successful',
  NOT_GOOD: 'That\'s Not Good!'
}

const RESPONSE_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORISED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_GOOD: 500
}

module.exports = {
  DATE_FORMAT,
  RESPONSE_MSG,
  RESPONSE_STATUS
}