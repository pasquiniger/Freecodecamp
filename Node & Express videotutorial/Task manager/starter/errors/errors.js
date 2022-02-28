'use strict'


class CustomApiError extends Error{
	constructor(message,statusCode){
		super(message)
		this.statusCode = statusCode
	}
}


const createCustomApiError = (msg,statusCode) =>{
	return new CustomApiError(msg,statusCode)
}


module.exports = {createCustomApiError, CustomApiError}