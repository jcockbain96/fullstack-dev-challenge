function calculateMonthlySavings(currentTotal, savingsForMonth) {
  return currentTotal + savingsForMonth;
}

function calculateInterest(amount, interestRate) {
  return amount * (interestRate / 100);
}

module.exports = {
  calculateMonthlySavings,
  calculateInterest,
};
