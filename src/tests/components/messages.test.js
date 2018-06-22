import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ConnectedMessages, { Messages } from '../../modules/main/message-field/messages';
import state from '../fixtures/root-reducer';

describe('should create Messages Container', () => {
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(state);
    wrapper = shallow(
      <ConnectedMessages store={store} />)
  });

  test('should render Messages correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('shuold have messages props', () => {
    expect(wrapper.props())
      .toEqual(expect.objectContaining({
        messages: state.messages.messages,
      }));
  });
});
