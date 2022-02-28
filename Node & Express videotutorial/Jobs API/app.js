require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()


// security packages
const helmet = require('helmet'),
    cors = require('cors'),
    xss = require('xss-clean'),
    rateLimiter = require('express-rate-limit')


// DB
const connectDB = require('./db/connect')

// Port config
const PORT = process.env.PORT || 3000

// extra packages
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable the `X-RateLimit-*` headers
}))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

//error middleware
const errorHandler = require('./middleware/error-handler'),
    notFound = require('./middleware/not-found')

// other middleware
const authenticateUser = require('./middleware/authentication.js')


// routes
const authRouter = require('./routes/auth'),
    jobsRouter = require('./routes/jobs')

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)



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