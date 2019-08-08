const server = require("../setup/server.setup");

const { expect } = require("../setup/chai.setup");

const exampleReqBody = {
  initialSavings: 100,
  monthlySavings: 10,
  interestRate: 5,
  interestPaymentPeriod: 3,
  monthsToCalculate: 1
};

const expectedResBody = [
  {
    month: 1,
    amount: 110
  }
];

describe("GET /api/v1/savings", function() {
  describe("1 month savings", function() {
    it("returns 200 and the correct savings data (no interest)", async function() {
      this.timeout(100000);
      const res = await server()
        .get("/api/v1/savings")
        .send(exampleReqBody);
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(expectedResBody);
    });
    it("returns 200 and the correct savings data (with interest)", async function() {
      this.timeout(100000);
      exampleReqBody.interestPaymentPeriod = 1;
      expectedResBody[0].amount = 115.5 ;
      const res = await server()
        .get("/api/v1/savings")
        .send(exampleReqBody);
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(expectedResBody);
    });
  });
});
