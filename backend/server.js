require ('dotenv').config();
const express=require("express");
const mongodb=require('mongoose')
const projectRouter=require('./routes/projectRoute')
// express app
const app=express();
// port 
const port =process.env.PORT || 5000;
//middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
//routes
app.use('/api/projects',projectRouter)
//mongodb
mongodb.connect(process.env.MONGO_URI)
.then(()=>{
    // listen for request
app.listen(port,()=>{
    console.log(`connect to mongo and listening listening on port ${port}`)
   
  
})
})
.catch((err)=>{
    console.log(err);
})
