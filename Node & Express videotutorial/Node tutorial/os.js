'use strict'
const os = require('os')


// Info about user
console.log(os.userInfo())


// method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)


const currentOS = {
	name: os.type(),
	user: os.userInfo().username,
}

console.log('Os info:')
console.table(currentOS)

console.log('CPU info')
console.log(os.cpus())