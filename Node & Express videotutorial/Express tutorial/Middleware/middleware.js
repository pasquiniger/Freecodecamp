//Ejemplo de middleware creado

const logger = (req,res,next)=>{
	let {method, url} = req
	let time = new Date().getUTCDate()
	console.log(method, url, time)
	next()
}


// a exportar
module.exports = logger