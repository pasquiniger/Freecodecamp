const express = require('express'),
	login = require('../Controllers/login controller.js'),
	route = express.Router()



// la url estaba definida en el form action
route.post('/', login)


module.exports = route