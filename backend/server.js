require ('dotenv').config();
const express=require("express");
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
// listen for request
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
   
  
})