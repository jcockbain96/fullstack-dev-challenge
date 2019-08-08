const {
  interestIsDue,
  calculateInterest,
} = require('../services/savings.service');

const getSavings = (req, res) => {
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
    amount += monthlySavings;
    if (interestIsDue(month, interestPaymentPeriod)) {
      amount += calculateInterest(amount, interestRatePerPaymentPeriod);
    }
    savingsPerMonth.push({
      month,
      amount,
    });
  }
  res.status(200).send(savingsPerMonth);
};

module.exports = {
  getSavings,
};
