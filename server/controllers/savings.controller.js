const savingsService = require("../services/savings.service");

const getSavings = function(req, res) {
  const {
    initialSavings,
    monthlySavings,
    interestRate,
    interestPaymentPeriod,
    monthsToCalculate
  } = req.body;
  const savingsData = savingsService.calculateSavingsData(
    initialSavings,
    monthlySavings,
    interestRate,
    interestPaymentPeriod,
    monthsToCalculate
  );
  res.status(200).send(savingsData);
};

module.exports = {
  getSavings
};
