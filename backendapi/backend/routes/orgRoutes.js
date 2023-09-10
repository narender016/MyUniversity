const express=require("express");
const Org = require("../models/orgModel");
const { createOrg, getOrg, getSingleOrg, deleteOrg, updateOrg, updateOrgSingleField, loginOrg } = require("../controllers/orgController");
const router=express.Router()


// create a task
router.post('/api/org',createOrg)

// Get/read all task
router.get('/api/org',getOrg)

//get a single task
router.get('/api/org/:id',getSingleOrg)

//delete task
router.delete('/api/org/:id',deleteOrg)

//update task
router.put('/api/org/:id',updateOrg)//put
router.patch('/api/org/:id',updateOrgSingleField)//patch


//login
router.get('/api/orgLogin',loginOrg)



module.exports=router;