'use strict'

const {writeFileSync} = require('fs')

for (let i=0; i<200; i++){
	writeFileSync('../folder/stream.txt', `Streams ${i}\n`, {flag: 'a'})
}
// {flag: 'a'} sirve para que no se sobreescriba, sino que escriba continuado
