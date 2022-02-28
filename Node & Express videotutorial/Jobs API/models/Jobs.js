'use strict'
const {Schema, model, Types} = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JobSchema = new Schema({
	company: {
		type: String,
		required: [true, 'Please provide a company name'],
		minlength: 3,
		maxlength: 50
	},
	position: {
		type: String,
		required: [true, 'Please provide a position name'],
		minlength: 3,
		maxlength: 100
	},
	status: {
		type: String,
		enum: ['interview', 'declined', 'pending'],
		default: 'pending'
	},
	createdBy: {
		type: Types.ObjectId,		//aclaramos que el tipo sera el ID referente a un documento 'User'
		ref: 'User',
		required: [true, 'Please provide user']
	}
}, {timestamps:true}) //createdAt y updatedAt?


module.exports = model('Job', JobSchema)
