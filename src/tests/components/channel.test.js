import React from 'react';
import { shallow } from 'enzyme';
import Channel from '../../modules/main/navigator/channels/channel';

test('should render Channel correctly', () => {
  const wrapper = shallow(<Channel />);
  expect(wrapper).toMatchSnapshot();
});
