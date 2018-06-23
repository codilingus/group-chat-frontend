import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ConnectedLogin, { Login } from '../../modules/login';

const LOGIN = 'session-user: login';

describe('Should render Login container', () => {
  const initialState = { login: { invalidLogin: false } };
  const mockStore = configureStore();
  let store, wrapper, onLogIn;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    wrapper = shallow(
      <ConnectedLogin store={store} />)
  });

  test('should render Login correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have props', () => {
    expect(wrapper.props())
      .toEqual(expect.objectContaining({
        invalidLogin: false,
        onLogIn: expect.any(Function),
      }));
  });

  it('maps onLogIn to dispatch login action', () => {
    wrapper.props().onLogIn();
    expect(store.dispatch).toHaveBeenCalledWith({ type: LOGIN });
  });

});

