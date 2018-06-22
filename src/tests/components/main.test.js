import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../modules/main';

test('should render Main correctly', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toMatchSnapshot();
});
