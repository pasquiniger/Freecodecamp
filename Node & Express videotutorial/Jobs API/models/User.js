'use strict'

const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50,
    },

    email: {
        type: String,
        required: [true, 'Please provide email'],

        //email validation regex
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email'],
        unique: true
    },

    password: {
        type:String,
        required: [true, 'Please provide password'],
        minlength: 3
    }
})


// pre es un tipo de middleware? 

UserSchema.pre('save', async function(next){
    let salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})


// Custom method
UserSchema.methods.getName = function(){
    return this.name
}

UserSchema.methods.createJWT = function(){
    return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

UserSchema.methods.comparePassword = async function(canditatePassword){
    let isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch
}

module.exports = model('User', UserSchema)