import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ConnectedRegistration, { Registration } from '../../modules/registration';

const ADD_NEW_USER = 'current-user: add-new-user';

describe('should create Registration Container', () => {
  const mockStore = configureStore();
  let store, wrapper, onAddingNewUser;

  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
    wrapper = shallow(<ConnectedRegistration store={store} />)
  });

  it('shuold have messages props', () => {
    expect(wrapper.props())
      .toEqual(expect.objectContaining({
        onAddingNewUser: expect.any(Function),
      }));
  });

  it('maps odAddingNewUser to dispatch add new user action', () => {
    wrapper.props().onAddingNewUser();
    expect(store.dispatch).toHaveBeenCalledWith({ type: ADD_NEW_USER });
  });

  test('should render Registration correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
 
});
