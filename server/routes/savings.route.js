const express = require('express');

const savingsController = require('../controllers/savings.controller');

const router = express.Router();

router.route('/')
  .get(savingsController.getSavings);

module.exports = router;
