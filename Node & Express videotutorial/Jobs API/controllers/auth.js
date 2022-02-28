'use strict'
const User = require('../models/User.js')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthorizedError} = require('../errors/index')


//bcrypt
const bcrypt = require('bcryptjs')

//Cuando uso esto debo evitar guardar las contraseñas
const register = async(req,res) => {
    let user = await User.create({...req.body})
    let token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user: {name: user.getName()}, token})
}

const login = async(req,res) => {
    let {email, password} = req.body

    //verificar si existen
    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }

    // encontrar usuario
    let user = await User.findOne({email})
    if(!user) throw new UnauthorizedError('Invalid Credentials')

    // comparar contraseña mediante metodo personalizado
    let isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect) throw new UnauthorizedError('Invalid Password')

    const token = user.createJWT()

    res.status(StatusCodes.OK).json({user: {name: user.getName()}, token})
}

module.exports = {
    register,
    login
}