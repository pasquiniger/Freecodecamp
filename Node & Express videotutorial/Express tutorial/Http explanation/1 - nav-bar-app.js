const http = require('http')
const {readFileSync} = require('fs')
const navbarIndex = readFileSync('../navbar-app/index.html', 'utf8'),
	homeStyle = readFileSync('../navbar-app/styles.css', 'utf8'),
	homeLogo = readFileSync('../navbar-app/logo.svg'),
	homeScript = readFileSync('../navbar-app/browser-app.js')
	//no se en que casos hacia falta o no el utf8 arriba


const server = http.createServer( (req,res) => {
	let url = req.url
	// console.log(url)    //se ve que el url cambia varias veces aunque yo no cambie de página
	//por ejemplo, pone el url del script, del stylesheet, y del ico, los url referenciados con src
	if (url === '/'){
		res.writeHead(200, {'content-type': 'text/html'}) // en este caso es muy importante aclarar el text/html y no text/plain, aunque puedo intentarlo para ver lo que ocurre
		res.write(navbarIndex)
		res.end()
	}

	// About page

	else if (url === '/about'){
		res.writeHead(200, {'content-type': 'text/html'})
		res.write('<h1>Acerca de</h1>')
		res.end(':v', ()=> console.log('asi funciona el callback en end?'))
	}

	// Logo 
	else if (url === '/logo.svg'){
		res.writeHead(200, {'content-type': 'image/svg+xml'}) // Puedo buscar los mimetypes en internet
		res.write(homeLogo)
		res.end(()=> console.log('Logo ingresado'))
	}

	// Estilo

	else if (url === '/styles.css'){
		res.writeHead(200, {'content-type': 'text/css'})
		res.write(homeStyle)
		res.end(()=> console.log('Estilo ingresado'))
	}

	// Script

	else if (url === '/browser-app.js'){
		res.writeHead(200, {'content-type': 'text/javascrip'})
		res.write(homeScript)
		res.end(()=> console.log('Script ingresado'))
	}

	else{
		res.writeHead(404, {'content-type': 'text/html'})
		res.write('<h1>Error</h1>')
		res.end('pagina no existente', ()=> console.log('asi funciona el callback en end?'))
	}
})


// Specifics ports to specifics things i wanna do
const PORT = 3000		

server.listen(PORT, ()=> console.log(`Server listening at ${PORT}`))