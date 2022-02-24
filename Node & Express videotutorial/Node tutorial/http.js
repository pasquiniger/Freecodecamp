'use strict'

const http = require('http')
const server = http.createServer((req,res) => {
	if (req.url === '/'){
		res.end('Welcome to our homepage')
	}
	if (req.url === '/about'){
		res.end('This is our short history')
	}
	res.end(`
		<h1>Oops!</h1>
		<h3>It seems that we can't find this page</h3>
		<a href="/">back home</a>`)
})

server.listen(3000)