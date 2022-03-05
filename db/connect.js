const mongoose = require('mongoose');

// mongoose
//how to connect with database using async and await
const connectDB=(url)=>{
    return mongoose.connect(url,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
    })
}

module.exports=connectDB