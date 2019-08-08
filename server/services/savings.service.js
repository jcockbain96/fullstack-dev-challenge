function calculateMonthlySavings(currentTotal, savingsForMonth) {
  return currentTotal + savingsForMonth;
}

function calculateSavingsData(
  initialSavings,
  monthlySavings,
  interestRate,
  interestPaymentPeriod,
  monthsToCalculate
) {
  let amount = initialSavings;
  const data = [];
  for (i = 1; i <= monthsToCalculate; i++) {
    amount = calculateMonthlySavings(amount, monthlySavings);
    if (i % interestPaymentPeriod === 0) amount += amount * (interestRate/100);
    data.push({
      month: i,
      amount
    });
  }
  return data;
}

module.exports = {
  calculateMonthlySavings,
  calculateSavingsData
};
