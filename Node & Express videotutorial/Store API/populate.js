'use strict'
require('dotenv').config()
const connectDB = require('./db/connect.js')
const Product = require('./models/products-model.js')
const jsonProducts = require('./products.json')


const start = async () =>{
	try {
		await connectDB(process.env.MONGO_URI)
		await Product.deleteMany()
		await Product.create(jsonProducts)
		console.log('success')
		process.exit(0)
	} catch(e) {
		// statements
		console.log(e);
		process.exit(1)
	}
}


start()