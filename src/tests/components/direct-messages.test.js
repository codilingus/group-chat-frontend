import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import state from '../fixtures/root-reducer';
import ConnectedDirectMessages, { DirectMessages } from '../../modules/main/navigator/direct-messages';

const FETCH_USERS = 'users: fetch-users';;

describe('Should render DirectMessages container', () => {
  const mockStore = configureStore();
  let store, wrapper, fetchUsers;

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<ConnectedDirectMessages store={store} />)
  });

  test('should render DirectMessages correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have props', () => {
    expect(wrapper.props())
      .toEqual(expect.objectContaining({
        users: state.users,
        fetchUsers: expect.any(Function),
      }));
  });

  it('maps fetchUsers to dispatch fetch-user action', () => {
    wrapper.props().fetchUsers();
    expect(store.dispatch).toHaveBeenCalledWith({ type: FETCH_USERS });
  });

});
