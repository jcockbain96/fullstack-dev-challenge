function calculateInterest(amount, interestRate) {
  return amount * (interestRate / 100);
}

function calculateIncreasedSavings(currentTotal, savingsForMonth) {
  return currentTotal + savingsForMonth;
}

function calculateIncreasedSavingsWithInterest(amount, monthlySavings, interestRate) {
  const savingsBeforeInterest = calculateIncreasedSavings(amount, monthlySavings);
  return savingsBeforeInterest + calculateInterest(savingsBeforeInterest, interestRate);
}

function interestIsDue(month, interestPaymentPeriod) {
  return !!(month % interestPaymentPeriod === 0);
}

module.exports = {
  calculateIncreasedSavings,
  calculateIncreasedSavingsWithInterest,
  calculateInterest,
  interestIsDue,
};
