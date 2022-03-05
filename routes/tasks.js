const express =require('express')
const router=express.Router()
const {getAllTask,postTask,getSingleTask,updateTask,deleteTask,editTask}=require("../controllers/AllFunctions")
//  / mean => /api/v1


router.route('/').get(getAllTask).post(postTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask).put(editTask)


// router.get("/",getAllTask)
// router.post("/",postTask)
// router.get("/:id",getSingleTask)
// router.patch("/:id",updateTask)
// router.delete("/:id",deleteTask)
module.exports=router