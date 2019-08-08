const server = require('../setup/server.setup');

const { expect } = require('../setup/chai.setup');

describe('GET /api/v1/savings', () => {
  describe('1 month savings', () => {
    const exampleReqBody = {
      initialSavings: 100,
      monthlySavings: 10,
      interestRate: 12,
      interestPaymentPeriod: 12,
      monthsToCalculate: 1,
    };
    const expectedResBody = [
      {
        month: 1,
        amount: 110,
      },
    ];
    it('returns 200 and the correct savings data (no interest)', async () => {
      const res = await server()
        .get('/api/v1/savings')
        .send(exampleReqBody);
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(expectedResBody);
    });
    it('returns 200 and the correct savings data (with interest)', async () => {
      exampleReqBody.interestPaymentPeriod = 1;
      expectedResBody[0].amount = 111.1;
      const res = await server()
        .get('/api/v1/savings')
        .send(exampleReqBody);
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(expectedResBody);
    });
  });
  describe('3 month savings', () => {
    const exampleReqBody = {
      initialSavings: 100,
      monthlySavings: 10,
      interestRate: 4,
      interestPaymentPeriod: 3,
      monthsToCalculate: 3,
    };
    const expectedResBody = [
      {
        month: 1,
        amount: 110,
      },
      {
        month: 2,
        amount: 120,
      },
      {
        month: 3,
        amount: 131.3,
      },
    ];
    it('returns 200 and the correct savings data (with interest)', async () => {
      const res = await server()
        .get('/api/v1/savings')
        .send(exampleReqBody);
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(expectedResBody);
    });
  });
});
