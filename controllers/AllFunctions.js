const Task=require('../models/Task')
const asyncWrapper=require('../middleWare/async')

const getAllTask=asyncWrapper(async(req,res)=>{
        const tasks=await Task.find({})
        res.status(200).json({tasks})
})
const postTask=asyncWrapper(async(req,res)=>{
        const task=await Task.create(req.body)
        res.status(201).json({task})
})
const getSingleTask=asyncWrapper(async(req,res)=>{
    
    //------------------------find by any attribute---------------
        const task=await Task.findOne({_id:req.params.id})
        //علشان اختبرها غير اي حرف لاي رقم في ID
        if(!task){
            return res.status(404).json({msg:`No Task With ${req.params.id}`})
        }
        res.status(200).json({task})
})
//----------------------------------updated with Patch--------------
const updateTask=asyncWrapper(async(req,res)=>{
    
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`No Task With ${taskID}`})
        }
        res.status(200).json({task:"updated"})
    

})
//-----------------------updated using Put--------------------------------------
const editTask=asyncWrapper(async(req,res)=>{
        const {id:taskID}=req.params
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
            overwrite:true
        })
        if(!task){
            return res.status(404).json({msg:`No Task With ${taskID}`})
        }
        res.status(200).json({task:"updated"})
})
const deleteTask=asyncWrapper(async(req,res)=>{
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No Task With ${taskID} `})
        }
        res.status(200).json({task})
   
})

module.exports={getAllTask,postTask,getSingleTask,updateTask,deleteTask,editTask}


