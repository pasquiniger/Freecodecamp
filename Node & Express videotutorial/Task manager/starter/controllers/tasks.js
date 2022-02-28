'use stricts'
const Task = require('../models/tasks')
const asyncWrapper = require('../middleware/async-wrapper.js')
const {createCustomApiError} = require('../errors/errors.js')

const getAllTasks = asyncWrapper(async(req,res) => {
    let tasks = await Task.find({})
    res.status(200).json({tasks})
})

const postNewTask = asyncWrapper(async(req,res) => {
    let task = await Task.create(req.body)
    res.status(201).json({task})        
})

const getSingleTask = asyncWrapper(async(req,res,next) => {
    let {id} = req.params
    let task = await Task.findById(id)
    if(!task){
        return next(createCustomApiError(`Task with ID ${id} not found`, 404))
    }
    res.status(200).json({task})
})

const updateTask = asyncWrapper(async(req,res,next) => {
    let {id} = req.params
    let {name, completed} = req.body
    let task = await Task.findByIdAndUpdate(id,{name, completed},{new:true, runValidators:true})
    if(!task){
        return next(createCustomApiError(`Task with ID ${id} not found`, 404))
        }
    res.status(200).json({task})
})

const deleteTask = asyncWrapper(async(req,res,next) => {
    let {id} = req.params
    let task = await Task.findByIdAndDelete(id)
    if(!task){
        return next(createCustomApiError(`Task with ID ${id} not found`, 404))
    }
    res.status(200).json({task})
})

module.exports = {getAllTasks, postNewTask, getSingleTask, updateTask, deleteTask}