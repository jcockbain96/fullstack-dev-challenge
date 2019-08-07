const express = require('express');

const savings = require('./savings.route');

const router = express.Router()

router.use('/savings', savings)

module.exports = router;