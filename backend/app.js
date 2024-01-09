const express = require('express');
const cors = require('cors')
const contactQuery = require('./routes/ContactRoutes.js')
const uploadedImage = require('./routes/ImageRoutes.js')

const app = express();

if(process.env.NODE_ENV!=='production'){
    require('dotenv').config({path:'config/config.env'})
}

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// Using routes
app.use('/api/v1', contactQuery)
// app.use('/api/v1', uploadedImage)

module.exports = app