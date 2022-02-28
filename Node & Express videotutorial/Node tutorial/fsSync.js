'use strict'
const {readFileSync, writeFileSync, unlink} = require('fs')

// Es equivalenta a hacer lo siguiente:
/*
const fs = require('fs')
fs.readFileSync   // y usarla de esa manera
*/

const first = readFileSync('./folder/first.txt', 'utf8')  // el segundo param es opcional, ver docs
const second = readFileSync('./folder/second.txt', 'utf8')
console.log(first, second)


// Esto puede crear o sobreescribir un archivo
writeFileSync('./folder/nuevo.txt', 'Texto cambiado')




const borrar = './folder/nuevo.txt'

// La mayoria de funciones fs tienen forma sincrona y asincrona
// Lo siguiente es unlink asincrono, y sirve para borrar archivos
/*
unlink(borrar, err => {
	if (err) throw  err
	console.log(`Successfully deleted ${borrar}`)
})

// Las funciones asincronas deben llevar como segundo parametro un callback con parametro error
*/

//Lo siguiente es lo mismo que lo anterior pero con una funcion Síncrona

/*
try {
  fs.unlinkSync(borrar);
  console.log(`Successfully deleted ${borrar}`)
} catch (err) {
  // handle the error
}
// En este caso tuve que usar el try y catch para manejar el posbile error
*/




