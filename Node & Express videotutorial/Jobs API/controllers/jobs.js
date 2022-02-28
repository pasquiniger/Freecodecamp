'use strict'
const Job = require('../models/Jobs')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthorizedError, NotFoundError} = require('../errors/index')


const getAllJobs = async(req,res) => {
    let jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, jobsCount: jobs.length})
}

const getJob = async(req,res) => {
    let {user: {userId}, params: {id: jobId}} = req

    let job = await Job.findOne({
        createdBy: userId,
        _id: jobId
    })

    if(!job) throw new NotFoundError(`Job with id ${jobId} not found`)

    return res.status(StatusCodes.OK).json({job})

}

const createJob = async(req,res) => {
    req.body.createdBy = req.user.userId
    let job = await Job.create(req.body)

    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async(req,res) => {
    let {user: {userId}, params: {id: jobId}} = req
    let {company, position} = req.body

    if(!company || !position) throw new BadRequestError('company and position can not be empty')


    let job = await Job.findOneAndUpdate(
        {createdBy: userId, _id: jobId}, 
        {company, position},
        {new: true, runValidators: true}
        )
    
    if(!job) throw new NotFoundError(`Job with id ${jobId} not found`)


    return res.status(StatusCodes.OK).json({job, msg: 'job updated'})
}

const deleteJob = async(req,res) => {
    let {user: {userId}, params: {id: jobId}} = req

    let job = await Job.findOneAndDelete({_id: jobId, createdBy: userId})

    if(!job) throw new NotFoundError(`Job with id ${jobId} not found`)

    res.status(StatusCodes.OK).json({job, msg: 'job deleted'})
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}