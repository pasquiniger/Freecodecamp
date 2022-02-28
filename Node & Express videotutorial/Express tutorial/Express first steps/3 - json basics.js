'use strict'
const express = require('express'),
	app = express(),
	PORT = 3000,
	{products, people} = require('./example-objects.js')


app.get('/', (req,res) => {
	res.json(products)
})



app.listen(PORT, ()=> console.log(`Listening at port ${PORT}`))
