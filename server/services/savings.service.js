function calculateMonthlySavings(currentTotal, savingsForMonth) {
  return currentTotal + savingsForMonth;
}

function calculateInterest(amount, interestRate) {
  return amount * (interestRate / 100);
}

function interestIsDue(month, interestPaymentPeriod) {
  return !!(month % interestPaymentPeriod === 0)
}

module.exports = {
  calculateMonthlySavings,
  calculateInterest,
  interestIsDue,
};
