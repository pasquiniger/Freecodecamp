'use strict'
const connectDB = require('./db/connect')
const express = require('express'),
    tasks = require('./routes/tasks'),
    notFound = require('./middleware/not-found.js'),
    errorHandlerMiddleware = require('./middleware/error-handler.js'),
    app = express(),
    PORT = 3000

require('dotenv').config()

//middlleware
app.use(express.static('./public'))

app.use(express.json())


// routes
app.get('/hello', (req,res) => {
    res.send('Task manager App')
})


app.use('/api/v1/tasks',tasks)

app.use(notFound)

app.use(errorHandlerMiddleware)

/*
    app
        .get('/api/v1/tasks')  get all tasks
        .post('/api/v1/tasks') create new task
        .get('/api/v1/tasks/:id') get single task
        .patch('/api/v1/tasks/:id') update task
        .delete('/api/v1/tasks/:id') delete task
*/
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to DB')
        app.listen(PORT, ()=> console.log(`Server listening at port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()