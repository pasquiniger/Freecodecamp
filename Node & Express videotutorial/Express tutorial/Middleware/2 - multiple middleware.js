'use strict'
const express = require('express'),
	logger = require('./middleware.js'),
	auth = require('./authorize.js'),
	app = express(),
	PORT = 3000


// en el app.use debo poner los middleware en un array para que se ejecuten en orden
app.use([auth,logger])



app.get('/', (req,res) => {
	res.send('Home')
})

app.get('/about', (req,res) => {
	res.send('About')
})

app.get('/api/products', (req,res) => {
	res.send('Products')
})

app.get('/api/items', (req,res) => {
	console.log(req.user)
	res.send('Items')
})


app.listen(PORT, () => console.log(`Listening at port ${PORT}`))