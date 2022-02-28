'use strict'
const path = require('path')

console.log('Lo que se muestra a continuación sera el separador que debe ser usado al especificar rutas en nuestro sistema operativo:')
console.log(path.sep)



//Esto crea una ruta hacia el archivo aunque haya barras mal puestas
const filePath = path.join('/folder//', '///subfolder', 'test.txt')


console.log(filePath)


const base = path.basename(filePath);
console.log(base)


//Hace algo parecido al join
const absolute = path.resolve(__dirname, 'folder', 'subfolder', 'test.txt');
console.log(absolute)