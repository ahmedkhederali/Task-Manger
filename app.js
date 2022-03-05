//import (connect) method from db/connect.js 
const connectDB=require("./db/connect")
const express=require('express')
const tasks=require("./routes/tasks")
const app = express()
require('dotenv').config()
const notFound=require("./middleWare/notFound")
const errorHandleMiddleWare=require("./middleWare/error")

// middleWare
app.use(express.static("./public"))
app.use(express.json())

//routes
app.use("/api/v1/tasks",tasks)
app.use(notFound)
app.use(errorHandleMiddleWare)

// function start to make connection synchoursnes
const start=async()=>{
    try{
       await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PROT_NUMBER,()=>{console.log("Done")})
    }catch(err){
console.log(err)
    }
}

start()

