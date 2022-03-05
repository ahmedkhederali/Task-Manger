const asyncWrapper=(fn)=>{
    return async (req,res,next)=>{
        try{
            await fn(req,res,next)

        }catch(err){
            //هنا فيه خطا افتراضي علشان لو محطتشي انا اي ايرور 
            next(err)
        }
    }
}
module.exports=asyncWrapper