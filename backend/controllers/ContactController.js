const Query = require('../Models/ContactModel.js')

exports.sendQuery = async (req, res) => {
    try {
        const { name, email, query } = req.body;

        let queryCreated = await Query.create({
            name,
            email,
            query,
        })

        res.status(201).json({
            success: true,
            queryCreated
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}