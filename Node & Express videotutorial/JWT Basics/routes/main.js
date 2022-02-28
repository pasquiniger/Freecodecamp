'use strict'
const {login, dashboard} = require('../controllers/main.js')
const express = require('express'),
	router = express.Router()


//middleware
const authenticationMiddleware = require('../middleware/auth.js')

router.post('/login', login)
router.get('/dashboard', authenticationMiddleware, dashboard)


module.exports = router