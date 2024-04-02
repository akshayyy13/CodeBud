const mongoose = require("mongoose")
require("dotenv").config()

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{

    }).then(()=>{
        console.log("Db Connected")
    }).catch((e)=>{
        console.log("Db Connection Failed")
        console.error(e);
        process.exit(1)
    })
} 