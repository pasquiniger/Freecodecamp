require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

// DB
const connectDB = require('./db/connect')

// Port config
const PORT = process.env.PORT || 3000

// extra packages
app.use(express.json())

//error handler middleware
const errorHandler = require('./middleware/error-handler'),
    notFound = require('./middleware/not-found')

// routes
const authRouter = require('./routes/auth'),
    jobsRouter = require('./routes/jobs')

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)



// errors
app.use(notFound)
app.use(errorHandler)




const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to DB')
        app.listen(PORT, ()=> console.log('Server listening at port ' + PORT))
    } catch (error) {
        console.log(error)
    }
}

start()