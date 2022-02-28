'use strict'
const UnauthorizedError = require('./unauthorized')
const CustomAPIError = require('./custom-api')
const NotFoundError = require('./not-found')
const BadRequestError = require('./bad-request')

module.exports = {
    CustomAPIError,
    UnauthorizedError,
    NotFoundError,
    BadRequestError
}