'use strict'
const express = require('express'),
    routes = express.Router()

// Auth controllers
const {login, register} = require('../controllers/auth')

routes.post('/register',register)
routes.post('/login', login)

module.exports = routes