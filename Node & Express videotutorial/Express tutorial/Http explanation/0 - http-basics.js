const http = require('http')
const server = http.createServer( (req,res) => {
	//console.log(req.method) // muestra el metodo de request
	// console.log(req.url) // muestra el url de donde llegó el request
	let url = req.url  //info sobre el url en nav-bar-app.js
	if (url === '/'){
		//Esto escribe el header. Se le pone el status code y despues el tipo de contenido?
		res.writeHead(200, {'content-type': 'text/html'})
		res.write('<h1>Pagina principal</h1>')
		// res.end() puede funcionar como res.write si le paso un texto como parametro
		// tambien si le agrego un callback como segundo parametro lo ejecuta
		res.end('hola', ()=> console.log('asi funciona el callback en end?'))
	}else if (url === '/about'){
		//Esto escribe el header. Se le pone el status code y despues el tipo de contenido?
		res.writeHead(200, {'content-type': 'text/html'})
		res.write('<h1>Acerca de</h1>')
		// res.end() puede funcionar como res.write si le paso un texto como parametro
		// tambien si le agrego un callback como segundo parametro lo ejecuta
		res.end(':v', ()=> console.log('asi funciona el callback en end?'))
	}else{
		//Esto escribe el header. Se le pone el status code y despues el tipo de contenido?
		res.writeHead(404, {'content-type': 'text/html'})
		res.write('<h1>Error</h1>')
		// res.end() puede funcionar como res.write si le paso un texto como parametro
		// tambien si le agrego un callback como segundo parametro lo ejecuta
		res.end('pagina no existente', ()=> console.log('asi funciona el callback en end?'))
	}
})


// Specifics ports to specifics things i wanna do
const PORT = 3000		

server.listen(PORT, ()=> console.log(`Server listening at ${PORT}`))