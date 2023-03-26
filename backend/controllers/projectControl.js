const Project= require("../models/projectModel");
const mongose=require('mongoose')
//get all projects
const getAllprojects=async (req,res)=>{
    const projects=await Project.find({})
    res.status(200).json(projects)
}
//get a single project
const getSinglePorject=async (req,res)=>{
    const {id}=req.params;
    if(!mongose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"Invalid id"})
    }
    const project=await Project.findById(id);
    if(!project){
        return res.status(400).json({error:"No project found"})
    }
    res.status(200).json(project)
}
//post a new project 
const postProject=async(req,res)=>{

    const data=req.body;
    try{
     const project =await Project.create({
        ...data
       });
       res.status(200).json(project);

    }catch(err){
        res.status(400).json({error:err.message})

    }

   
}
//delete a project

//update a project 

module.exports={
    postProject,
    getAllprojects,
    getSinglePorject,
}