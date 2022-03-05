const errorHandleMiddleWare =(err, req, res, next) => {
    res.status(500).send('Something Went To Error Try Again Later....!')
  }
  module.exports=errorHandleMiddleWare