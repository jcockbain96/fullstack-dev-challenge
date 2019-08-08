const savingsService = require("../services/savings.service");

const getSavings = function(req, res) {
  const {
    initialSavings,
    monthlySavings,
    interestRate,
    interestPaymentPeriod,
    monthsToCalculate
  } = req.body;

  let amount = initialSavings;
  const savingsPerMonth = [];
  for (month = 1; month <= monthsToCalculate; month++){
    amount += monthlySavings;
    if (month % interestPaymentPeriod === 0) {
      amount += savingsService.calculateInterest(amount, interestRate);
    }
    savingsPerMonth.push({
      month,
      amount
    });
  };
  res.status(200).send(savingsPerMonth);
};

module.exports = {
  getSavings
};
