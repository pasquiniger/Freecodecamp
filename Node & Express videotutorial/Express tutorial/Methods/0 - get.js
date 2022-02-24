'use strict'
const express = require('express'),
	people = require('../Routes/people.js'),
	login = require('../Routes/auth.js'),
	app = express(),
	PORT = 3000

// Static assets
app.use(express.static('../methods-public/'))
app.use(express.urlencoded({extended: false}))  

// Debo buscar mas sobre el urlencoded, pero el extended: false me permite trabajar con req.body

app.use(express.json())  // ?? debo buscar en doc oficial


app.use('/api/people', people)


app.use('/login', login)


app.listen(PORT, ()=> console.log(`Listening at port ${PORT}`))
