const { validationResult } = require('express-validator/check');

const {
  interestIsDue,
  calculateIncreasedSavings,
  calculateIncreasedSavingsWithInterest,
  getCurrencyMultiplier,
} = require('../services/savings.service');

const postSavings = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    let {
      initialSavings,
      monthlySavings,
      interestRate,
      interestPaymentPeriod,
      monthsToCalculate,
    } = req.body;

    const { currencyCode } = req.query;
    const currencyMultiplier = (currencyCode)
      ? await getCurrencyMultiplier(currencyCode)
      : 1;

    initialSavings *= currencyMultiplier;
    monthlySavings *= currencyMultiplier;

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
