'use strict'
const express = require('express'),
	app = express(),
	PORT = 3000,
	{products, people} = require('../Express first steps/example-objects.js')


app.get('/', (req,res) => {
	res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})


app.get('/api/products', (req,res,next) => {
	const newProducts = products.map( prod =>{
		const {id, name, image} = prod
		return {id, name, image}		// solo envio informacion específica
	})
	res.json(newProducts)
})


app.get('/api/products/:prodID', (req,res,next) => {
	let id = req.params.prodID
	const singleProduct = products.find( prod => prod.id === Number(id))
	if (singleProduct === undefined){
		next()
	}
	res.status(200).json(singleProduct)
})


app.get('/api/products/:prodID/reviews/:reviewID', (req,res,next) => {
	console.log(req.params)
	res.send('Hello world')
})



app.get('/api/v1/query', (req,res,next) => {
	// console.log(req.query)  // si en la url escribi query?algo=valor&otracosa=valor saldra escrito en el console log
	let {search, limit} = req.query
	let sortedProds = [...products]

	if (search){
		sortedProds = sortedProds.filter( prod => prod.name.startsWith(search))
	}

	if (limit){
		sortedProds = sortedProds.slice(0,Number(limit))
	}

	if (sortedProds.length === 0){
		res.status(200).send('No products matched your search')
	}

	res.status(200).json(sortedProds)
})



app.all('*', (req,res) => {
	res.status(404).send('Resource not found.')
})



app.listen(PORT, ()=> console.log(`Listening at port ${PORT}`))
