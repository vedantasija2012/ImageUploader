const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    fileName: String,
    uploadDate: {
        type: Date,
        default: Date.now
    },
    data:{
        type: Buffer,
        required: true
    },
    contentType: String
})

module.exports = new mongoose.model("Images", imageSchema)