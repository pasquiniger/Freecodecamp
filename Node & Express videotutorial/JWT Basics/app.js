'use strict'
require('dotenv').config()
require('express-async-errors')
const connectDB = require('./db/connect'),
	express = require('express'),
	app = express(),
	PORT = process.env.PORT || 3000


// para poder usar req.body
app.use(express.json())

//routes
const mainRouter = require('./routes/main.js')

//middleware
const errorHandler = require('./middleware/error-handler.js'),
	notFound = require('./middleware/not-found.js')

// static
app.use(express.static('./public'))



app.use('/api/v1', mainRouter)




// errors

app.use(errorHandler)
app.use(notFound)



//connect DB & listen PORT

const start = async() => {
	try {
		await connectDB(process.env.MONGO_URI)
		console.log('Connected to database')
		app.listen(PORT, ()=> console.log(`Server listening at port ${PORT}`))
	} catch(e) {
		// statements
		console.log(e);
	}
}


start()