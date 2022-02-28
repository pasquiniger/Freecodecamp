'use strict'
const {CustomApiError} = require('../errors/errors.js')

const errorHandlerMiddleware = (err,req,res,next) => {
	console.log(err)
	return res.status(500).json({msg: 'Something went wrong'})
}

module.exports = errorHandlerMiddleware