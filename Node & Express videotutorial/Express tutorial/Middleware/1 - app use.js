'use strict'
const express = require('express'),
	logger = require('./middleware.js'),
	app = express(),
	PORT = 3000


// Al no poner el path, el middleware que puse en app.use se utilizara en todas las url
// Esto se ejecutará solo para las peticiones que vienen después del app.use
app.use('/api',logger)

// en este caso, el req.url me devolvera la url DESPUES del '/api'
// es decir, si voy a /api/products/1 la url devuelta será '/products/1'

app.get('/', (req,res) => {
	res.send('Home')
})

app.get('/about', (req,res) => {
	res.send('About')
})

app.get('/products', (req,res) => {
	res.send('Products')
})


app.listen(PORT, () => console.log(`Listening at port ${PORT}`))