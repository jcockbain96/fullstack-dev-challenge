import React from 'react';
import { shallow } from 'enzyme';
import CurrencyInput from './CurrencyInput';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CurrencyInput />);
    expect(wrapper).toHaveLength(1);
  });
});
