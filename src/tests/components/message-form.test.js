import React from 'react';
import { shallow } from 'enzyme';
import MessageForm from '../../modules/main/message-field/message-form';

test('should render MessageForm component correctly', () => {
  const wrapper = shallow(<MessageForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should set value on input message change', () => {
  const value = 'some message';
  const wrapper = shallow(<MessageForm />);
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('message')).toBe(value);
});
