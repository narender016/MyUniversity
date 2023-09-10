const express=require("express");
const Task = require("../models/taskModel");
const { createTask, getTask, getSingleTask, deleteTask, updateTask, updateTaskSingleField } = require("../controllers/taskController");
const router=express.Router()


// create a task
router.post('/api/tasks',createTask)

// Get/read all task
router.get('/api/tasks',getTask)

//get a single task
router.get('/api/tasks/:id',getSingleTask)

//delete task
router.delete('/api/tasks/:id',deleteTask)

//update task
router.put('/api/tasks/:id',updateTask)//put
router.patch('/api/tasks/:id',updateTaskSingleField)//patch



module.exports=router;