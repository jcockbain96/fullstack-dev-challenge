const express = require('express');

const savingsController = require('../controllers/savings.controller');

const router = express.Router();

router.route('/')
  .post(savingsController.postSavings);

module.exports = router;
