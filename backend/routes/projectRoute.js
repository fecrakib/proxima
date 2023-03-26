const express=require("express");
const { postProject, getAllprojects, getSinglePorject } = require("../controllers/projectControl");

//router
const router=express.Router();
//routes
//get all project
router.get('/',getAllprojects)
//get a single project
router.get('/:id',getSinglePorject)
//post a new project
router.post('/',postProject)
//delete a project
router.delete('/:id',(req,res)=>{
    res.json({message:'delete a new project'})
})
//update a new project
router.patch('/:id',(req,res)=>{
    res.json({message:'update a new project'})
})
module.exports=router;