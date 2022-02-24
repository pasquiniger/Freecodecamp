'use strict'
const http = require('http'),
	express = require('express'),
	app = express()

app
	.get('/', (req,res) => {
		res.send('Respuesta desde express')
})
	.get('/services', (req,res) => {
		res.send('Pagina de servicios')
	})
	.listen(3000, (req,res) => {
		console.log('Servidor corriendo en localhost:3000')
	})