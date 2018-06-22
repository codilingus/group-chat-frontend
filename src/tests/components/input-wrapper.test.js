import React from 'react';
import { shallow } from 'enzyme';
import InputWrapper from '../../components/input-wrapper';

test('should render InputWrapper component correctly', () => {
  const wrapper = shallow(<InputWrapper />);
  expect(wrapper).toMatchSnapshot();
});

// test('should set value on input change', () => {
//   const onChange = jest.fn();
//   const value = 'some value';
//   const wrapper = shallow(<InputWrapper />);
//   wrapper.find('input').simulate('change', {
//     target: { value }
//   });
//   expect(wrapper.state('value')).toBe(value);
//   expect(onChange).toHaveBeenLastCalledWith({ value })
// });
