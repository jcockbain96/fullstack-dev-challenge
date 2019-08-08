const { calculateMonthlySavings } = require("../../services/savings.service");

const { expect } = require("../setup/chai.setup");

describe("savings.service.js", () => {
  describe("calculateMonthlySavings(currentSavings, savingsForMonth)", () => {
    describe("10, 10", () => {
      it("returns 20", () => {
        const result = calculateMonthlySavings(10, 10);
        expect(result).to.equal(20);
      });
    });
  });
});
