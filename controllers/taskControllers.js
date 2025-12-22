const express = require('express');
const taskSchema = require('../model/taskSchema.model')
let tasks = [];
// getting listed tasks
const getTasks = (req, res) => {
    res.json(tasks);
}     

//posting all tasks
const postTask = (req,res)=>{
const {id, taskname , status } =req.body;
if(!id ||!taskname) {
    return res.status(400).json({error:"missing requires feilds "})
}
const newTask = {taskname , status};
tasks.push(newTask);
res.status(201).json(newTask);
}

module.exports ={
    getTasks,
    postTask
}