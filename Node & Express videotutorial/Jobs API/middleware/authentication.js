'use strict'
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {UnauthorizedError} = require('../errors/index')

const auth = (req,res,next) => {
    //check header
    let authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthorizedError('Invalid Authentication')
    }

    let token = authHeader.split(' ')[1]

    try {
        let payload = jwt.verify(token,process.env.JWT_SECRET)
        //attach the user to the job routes
        req.user = {userId: payload.userId, name: payload.name}
        next()
    } catch (error) {
        throw new UnauthorizedError('Invalid Authentication')
    }

}
