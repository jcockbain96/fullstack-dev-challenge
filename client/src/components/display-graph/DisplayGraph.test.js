import React from 'react';
import { shallow } from 'enzyme';
import DisplayGraph from './DisplayGraph';
import apiRequests from '../../utils/apiRequests';

const mockedData = {
  data: {
    savngsPerMonth: [
      { month: 1, amount: 100}
    ]
  }
}

const props = {
  savingsParams: {
    initialSavings: 100,
    monthlySavings: 100,
    interestRate: 2,
    interestPaymentPeriod: 2,
    monthsToCalculate: 600,
  }
}

describe('<App />', () => {
  beforeAll(() => {
    apiRequests.postSavings = jest.fn().mockImplementation(() => Promise.resolve({
      mockedData,
    }));
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<DisplayGraph {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});
