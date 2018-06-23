import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ConnectedDirectMessage, { DirectMessage } from '../../modules/main/navigator/direct-messages/direct-message';

const CLEAR_MESSAGE_BOARD = 'messages: clear-message-board';
const FETCH_MESSAGES = 'messages: fetch-messages';

describe('Should render DirectMessage container', () => {
  const mockStore = configureStore();
  let store, wrapper, onFetchingMessage, onClearMessageBoard;

  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
    wrapper = shallow(<ConnectedDirectMessage store={store} />)
  });

  test('should render DirectMessage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have props', () => {
    expect(wrapper.props())
      .toEqual(expect.objectContaining({
        onFetchingMessage: expect.any(Function),
        onClearMessageBoard: expect.any(Function)
      }));
  });

  it('maps onFetchingMessage to dispatch fetch-messages action', () => {
    wrapper.props().onFetchingMessage();
    expect(store.dispatch).toHaveBeenCalledWith({ type: FETCH_MESSAGES });
  });

  it('maps onClearMessageBoard to dispatch clear-message-board action', () => {
    wrapper.props().onClearMessageBoard();
    expect(store.dispatch).toHaveBeenCalledWith({ type: CLEAR_MESSAGE_BOARD });
  });

});
