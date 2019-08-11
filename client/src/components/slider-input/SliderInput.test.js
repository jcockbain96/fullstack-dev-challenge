import React from 'react';
import { shallow } from 'enzyme';
import SliderInput from './SliderInput';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SliderInput />);
    expect(wrapper).toHaveLength(1);
  });
});
