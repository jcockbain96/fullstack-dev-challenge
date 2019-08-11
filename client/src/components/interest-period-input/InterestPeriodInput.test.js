import React from 'react';
import { shallow } from 'enzyme';
import InterestPeriodInput from './InterestPeriodInput';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<InterestPeriodInput />);
    expect(wrapper).toHaveLength(1);
  });
});
