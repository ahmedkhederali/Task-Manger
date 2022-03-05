const mongoose=require('mongoose')
//how to create schema
const  TaskSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,'must provide name'],
    trim:true, // to delete space from start and end,
    maxlength:[20,"Can't be more than 20 character"]
},
complete:{
    type:Boolean,
    default:false // if i didn't but that will automatic add with false 
},

})

//الاسم ده بيستخدمة في انه يجيب الجمع منه ويسمي الكولكشن بيه 
// يعني مثلا في المثال بتاعنا هيسمي الكولكشن بي (Tasks)

module.exports=mongoose.model('Task',TaskSchema)