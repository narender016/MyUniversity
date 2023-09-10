const express=require("express");
const mongoose=require("mongoose");
const Task = require("./models/taskModel");
const Org = require("./models/orgModel");
const dotenv=require("dotenv").config();
const taskRoutes=require('./routes/taskRoutes');
const orgRoutes=require('./routes/orgRoutes');

const app=express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(taskRoutes);
app.use(orgRoutes);
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/github_api', taskRoutes,orgRoutes)
//routes
app.get('/',(req,res)=>{
res.send("home page");
})

const PORT=process.env.PORT || 5000;

mongoose
.connect(process.env.mongo_cred)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`);
    })
})
.catch((err)=>{
console.log(err)
})






