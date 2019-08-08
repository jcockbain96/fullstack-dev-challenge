const server = require("../setup/server.setup");

const { expect } = require("../setup/chai.setup");

const exampleReqBody = {
  initialSavings: 100,
  monthlySavings: 10,
  interestRate: 4,
  interestPaymentPeriod: 3,
  monthsToCalculate: 1
};

const expectedResBody = [
  {
    month: 1,
    amount: 110
  }
];

describe("/api/v1/savings", function() {
  describe("GET", function() {
    it("returns 200", async function() {
      this.timeout(100000);
      const res = await server()
        .get("/api/v1/savings")
        .send(exampleReqBody);
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(expectedResBody);
    });
  });
});
