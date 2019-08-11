const { body } = require('express-validator/check');

exports.validate = (method) => {
  switch (method) {
  case 'postSavings': {
    return [
      body('initialSavings', 'initialSavings must exist and be a number').exists().isNumeric(),

      body('monthlySavings', 'monthlySavings must exist and be a number').exists().isNumeric(),

      body('interestRate', 'interestRate must exist and be a number').exists().isNumeric(),

      body('interestPaymentPeriod', 'interestPaymentPeriod must exist and be a number').exists().isNumeric(),

      body('monthsToCalculate', 'monthsToCalculate must exist and be a number').exists().isNumeric(),
    ];
  }
  default:
    return [];
  }
};
