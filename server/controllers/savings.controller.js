const {
  interestIsDue,
  calculateIncreasedSavings,
  calculateIncreasedSavingsWithInterest,
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
    amount = (interestIsDue(month, interestPaymentPeriod))
      ? calculateIncreasedSavingsWithInterest(amount, monthlySavings, interestRatePerPaymentPeriod)
      : calculateIncreasedSavings(amount, monthlySavings);
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
