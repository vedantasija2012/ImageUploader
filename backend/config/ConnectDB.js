const mongoose = require('mongoose')

const ConnectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to MongoDB")
    }).catch(()=>{
        console.log("Connection to MongoDB Failed!")
    })
}

module.exports = ConnectDB;