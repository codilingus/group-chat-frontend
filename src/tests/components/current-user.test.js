import React from 'react';
import { shallow } from 'enzyme';
import CurrentUser from '../../modules/main/navigator/current-user';

test('should render CurrentUser correctly', () => {
  const wrapper = shallow(<CurrentUser />);
  expect(wrapper).toMatchSnapshot();
});
