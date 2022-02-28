'use strict'

const CustomAPIError = require('./custom-error.js')
const {StatusCodes} = require('http-status-codes')


class BadRequestError extends CustomAPIError {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError
