'use strict'
const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors/index.js')

const login = async(req,res) => {
	const {username, password} = req.body

	if(!username || !password){
		throw new BadRequestError('Please provide email and password')
	}

	//just for demo. Id is given by the DB

	const id = new Date().getDate()


	//always try to keep payload small
	//just for demo. In production use long, complex and unguessable string value!!!!
	let token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn: '30d'})
	res.status(200).json({msg: 'user created', token})
}

const dashboard = async(req,res) => {
	console.log(req.user)
	let luckyNumber = Math.round(Math.random() * 100)
	res.status(200).json({msg: `Hello ${req.user.username}`,
	secret: 'Here is your authorized data, your lucky number is '+ luckyNumber})

}


module.exports = {login, dashboard}