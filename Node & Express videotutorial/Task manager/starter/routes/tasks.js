'use strict'
const express = require('express'),
{   
    getAllTasks, 
    postNewTask,
    getSingleTask, 
    updateTask, 
    deleteTask
}              = require('../controllers/tasks'),
    router = express.Router()


router.route('/')
    .get(getAllTasks)
    .post(postNewTask)

router.route('/:id')
    .get(getSingleTask)
    .patch(updateTask)
    .delete(deleteTask)

module.exports = router