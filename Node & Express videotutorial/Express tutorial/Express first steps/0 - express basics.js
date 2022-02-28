'use strict'
const express = require('express'),
	app = express(),
	PORT = 3000

/*
	app.get
	app.post
	app.put
	app.delete
	app.all  		//Seran todos los metodos?
	app.use
	app.listen

*/


app.get('/', (req,res,next) => {
	res.status(200).send('Home page')
})


app.get('/about', (req,res,next) => {
	res.status(200).send('About page')
})



app.get('*', (req,res) => {
	//con este método puedo cambiar el status. 
	res.status(404).send('<h1>Error</h1>\npage not found')
})

// Express me tira los statuscode automaticamente???
// cuando no encuentra la url, almenos pone automaticamente el 404
// Pero anteriormente yo ya configuré todo lo que debe ocurrir cuando se va a una url incorrecta
// Y eso incluye poner un statuscode acorde

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))