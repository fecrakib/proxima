const express=require("express");
//router
const router=express.Router();
//routes
//get all project
router.get('/',(req,res)=>{
    res.json({message:'get all projects'})
})
//get a single project
router.get('/:id',(req,res)=>{
    res.json({message:'get a single project'})
})
//post a new project
router.post('/',(req,res)=>{
    res.json({message:"post a new project"})
})
//delete a project
router.delete('/:id',(req,res)=>{
    res.json({message:'delete a new project'})
})
//update a new project
router.patch('/:id',(req,res)=>{
    res.json({message:'update a new project'})
})
module.exports=router;