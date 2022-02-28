const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const customEmitter = new MyEmitter()

customEmitter.on('response', () => console.log('Data received'))

customEmitter.on('response', (name, nro) => {
	console.log(`Hello ${name} i can edit a event ${nro}`)
})

//Nota como el evento se ejecuta con las 2 ediciones

customEmitter.emit('response', 'Jose', 25)

console.log(customEmitter)
