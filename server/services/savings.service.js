const axios = require('axios');

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

async function geCurrencyMultiplier(currencyCode) {
  return axios.get(`https://api.exchangeratesapi.io/latest?base=GBP&symbols=${currencyCode}`, {})
    .then((response) => response.data.rates[currencyCode])
    .catch((err) => {
      console.error(err);
      return 1;
    });
}

module.exports = {
  calculateIncreasedSavings,
  calculateIncreasedSavingsWithInterest,
  calculateInterest,
  interestIsDue,
  getCurrencyMultiplier,
};
