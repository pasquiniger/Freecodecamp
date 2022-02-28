'use strict'
const {createReadStream} = require('fs')

const stream = createReadStream('../folder/stream.txt')


//nos da el peso del archivo en bytes
stream.on('data', result => {
	console.log(result.length + ' bytes')
})

stream.on('error', err => console.log(err))