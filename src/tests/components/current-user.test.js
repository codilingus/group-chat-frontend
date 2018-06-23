import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import state from '../fixtures/root-reducer';
import CurrentUser from '../../modules/main/navigator/current-user';

describe('Should render CurrentUser container', () => {
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(
      <CurrentUser store={store} />
    );
  });

  test('should render CurrentUser correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have props', () => {
    expect(wrapper.props())
      .toEqual(expect.objectContaining({
        activeUser: null,
      }));
  });
});
