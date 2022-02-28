// Esto es lo mismo que en asyncApp.js pero aca voy a utilizar la variable util
const util = require('util')
const {readFile, writeFile} = require('fs')
const readFilePromised = util.promisify(readFile)
const writeFilePromised = util.promisify(writeFile)


const start = async()=>{
	try{
		let first = await readFilePromised('../folder/first.txt', 'utf8')
		let second = await readFilePromised('../folder/second.txt', 'utf8')
		await writeFilePromised('../folder/promised.txt', `THIS IS AWESOME : ${first} ${second}`)
		console.log(first, second)		
	}catch(err){
		console.log(err)
	}

}



/*
podria haber escrito lo siguiente:
	const {readFile, writeFile} = require('fs').promises
y me ahorraba escribir el promisify y crear las nuevas variables

*/

start()