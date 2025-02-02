const { validationResult } = require('express-validator/check');

const {
  interestIsDue,
  calculateIncreasedSavings,
  calculateIncreasedSavingsWithInterest,
} = require('../services/savings.service');

const postSavings = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const {
      initialSavings,
      monthlySavings,
      interestRate,
      interestPaymentPeriod,
      monthsToCalculate,
    } = req.body;

    let amount = initialSavings;
    const savingsPerMonth = [];
    const interestRatePerPaymentPeriod = interestRate * (interestPaymentPeriod / 12);

    for (let month = 1; month <= monthsToCalculate; month += 1) {
      amount = (interestIsDue(month, interestPaymentPeriod))
        ? calculateIncreasedSavingsWithInterest(amount, monthlySavings, interestRatePerPaymentPeriod)
        : calculateIncreasedSavings(amount, monthlySavings);
      savingsPerMonth.push({
        month,
        amount,
      });
    }
    res.status(200).send({
      savingsPerMonth,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postSavings,
};
