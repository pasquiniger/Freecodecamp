'use strict'
const express = require('express'),
	logger = require('./middleware.js'),
	app = express(),
	PORT = 3000


//Primer ejemplo del uso del middleware importado

app.get('/', logger, (req,res) => {
	res.send('Home')
})

app.get('/about', logger, (req,res) => {
	res.send('About')
})

app.get('/products', logger, (req,res) => {
	res.send('Products')
})


app.listen(PORT, () => console.log(`Listening at port ${PORT}`))