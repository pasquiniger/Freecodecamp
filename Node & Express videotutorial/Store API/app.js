'use strict'
require('dotenv').config()
require('express-async-errors')

const errorHandlerMiddleware = require('./middleware/error-handler.js'),
	notFound = require('./middleware/not-found.js'),
	getAllProducts = require('./routes/products.js'),
	connectDB = require('./db/connect'),
	express = require('express'),
	app = express(),
	PORT = process.env.PORT || 3000


app.use(express.json())


app.get('/', (req,res)=>{
	res.status(200).send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
})

app.use('/api/v1/products', getAllProducts)

app.use(notFound)
app.use(errorHandlerMiddleware)








const start = async() =>{
	try {
		await connectDB(process.env.MONGO_URI)
		console.log('Connected to DB')
		app.listen(PORT, ()=> console.log(`Server listening at port ${PORT}`))

	} catch(e) {
		// statements
		console.log(e);
	}	
}

start()