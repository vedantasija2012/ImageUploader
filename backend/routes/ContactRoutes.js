const express = require('express')
const { sendQuery } = require('../controllers/ContactController')

const router = express.Router()

router.route('/contact').post(sendQuery)

module.exports = router