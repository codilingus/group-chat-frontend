import React from 'react';
import { shallow } from 'enzyme';
import Details from '../../modules/main/message-field/details';

test('should render Details correctly', () => {
  const wrapper = shallow(<Details />);
  expect(wrapper).toMatchSnapshot();
});
