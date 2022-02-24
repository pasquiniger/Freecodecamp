'use strict'
const express = require('express'),
	path = require('path'),
	app = express(),
	PORT = 3000


//Setup static and middleware

app.use(express.static('./public'))



// Puedo omitir todo esto si tengo el index en /public. Aunque cre que solo funciona en el home

/*
app.get('/', (req,res,next) => {
	res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
})
*/

app.all('*', (req,res) => {
	res.status(404).send('Resource not found.')
})


app.listen(PORT, ()=> console.log(`Listening at port ${PORT}`))


