'use strict'
const express = require('express'),
    routes = express.Router()

// Jobs controllers
const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob} = require('../controllers/jobs')

routes.route('/')
    .post(createJob)
    .get(getAllJobs)

routes.route('/:id')
    .get(getJob)
    .delete(deleteJob)
    .patch(updateJob)

module.exports = routes