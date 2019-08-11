const express = require('express');

const requestValidator = require('../middleware/request-validator');
const savingsController = require('../controllers/savings.controller');

const router = express.Router();

router.route('/')
  .post(
    requestValidator.validate('postSavings'),
    savingsController.postSavings,
  );

module.exports = router;
