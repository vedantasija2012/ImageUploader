const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    query: String,
    dateReceived: {
        type: Date,
        default: Date.now
    }
})

module.exports = new mongoose.model('Contact', contactSchema)