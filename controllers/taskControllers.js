// const express = require('express');
// const taskSchema = require('../model/taskSchema.model')
// let tasks = [];
// // getting listed tasks
// const getTasks = (req, res) => {
//     res.json(tasks);
// }     

// //posting all tasks
// const postTask = (req,res)=>{
// const {id, taskname , status } =req.body;
// if(!id ||!taskname) {
//     return res.status(400).json({error:"missing requires feilds "})
// }
// const newTask = {taskname , status};
// tasks.push(newTask);
// res.status(201).json(newTask);
// }

// module.exports ={
//     getTasks,
//     postTask
// }

const Task = require('../model/taskSchema.model');

// GET all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find(); // 🔥 MongoDB
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST new task
const postTask = async (req, res) => {
    try {
        const { taskname, status } = req.body;

        if (!taskname) {
            return res.status(400).json({ error: "taskname is required" });
        }

        const newTask = new Task({
            taskname,
            status
        });

        await newTask.save(); // 🔥 saves to MongoDB

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTasks,
    postTask
};
