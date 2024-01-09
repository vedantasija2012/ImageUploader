const uploadFormat = require('../Models/ImageModel.js')

exports.uploadImage = async(req,res)=>{
    try {
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "No Image Uploaded. Please Provide An Image!"
            })
        }
        
        const {originalName, buffer, mimetype} = req.file

        const newImage = new uploadFormat({
            fileName: originalName,
            data: buffer,
            contentType: mimetype,
        })

        const savedImage = await newImage.save();

        res.status(201).json({
            success: true,
            message: "Image Uploaded Successfully!",
            image: savedImage
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}