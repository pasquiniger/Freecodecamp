'use strict'
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors/custom-error')


const authenticationMiddleware = (req,res,next) => {

	let authHeader = req.headers.authorization
	if(!authHeader || !authHeader.startsWith('Bearer')){
		throw new UnauthenticatedError('No token provided')
	}

	let token = authHeader.split(' ')[1]

	try {
		var decoded = jwt.verify(token, process.env.JWT_SECRET)
		let {username, id} = decoded
		req.user = {id, username}
		next()
	} catch(e) {
		throw new UnauthenticatedError('Not authorized to access this route')
	}

}

module.exports = authenticationMiddleware