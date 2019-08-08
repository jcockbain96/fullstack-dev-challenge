const { expect } = require("../setup/chai.setup");

const {
  calculateMonthlySavings,
  calculateInterest,
  interestIsDue
} = require("../../services/savings.service");

describe("savings.service.js", () => {
  describe("calculateMonthlySavings(currentSavings, savingsForMonth)", () => {
    describe("10, 10", () => {
      it("returns 20", () => {
        const result = calculateMonthlySavings(10, 10);
        expect(result).to.equal(20);
      });
    });
    describe("10, 50", () => {
      it("returns 60", () => {
        const result = calculateMonthlySavings(10, 10);
        expect(result).to.equal(20);
      });
    });
  });
  describe("calculateInterest(amount, interestRate)", () => {
    describe("20, 10", () => {
      it("returns 2", () => {
        const result = calculateInterest(20, 10);
        expect(result).to.equal(2);
      });
    });
    describe("100, 5", () => {
      it("returns 5", () => {
        const result = calculateInterest(100, 5);
        expect(result).to.equal(5);
      });
    });
  });
  describe("interestIsDue(month, interestPaymentPeriod)", () => {
    describe("10, 2", () => {
      it("returns true", () => {
        const result = interestIsDue(10, 2);
        expect(result).to.equal(true);
      });
    });
    describe("7, 5", () => {
      it("returns false", () => {
        const result = interestIsDue(7, 5);
        expect(result).to.equal(false);
      });
    });
  });
});
