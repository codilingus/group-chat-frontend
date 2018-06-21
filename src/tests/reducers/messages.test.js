import { messagesReducer } from '../../state/messages';
import messages from '../fixtures/messages';

const CLEAR_MESSAGE_BOARD = 'messages: clear-message-board';
const FETCH_MESSAGES = 'messages: fetch-messages';
const FETCH_MESSAGES_SUCCESS = 'messages: fetch-messages-success';

test('should setup default messages values', () => {
  const state = messagesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(messages);
});

test('should clear board with messages', () => {
  const action = {
    type: CLEAR_MESSAGE_BOARD
  };
  const state = messagesReducer(messages, action);
  expect(state.messages).toEqual([{}]);
});

test('should set loading messages as true', () => {
  const action = {
    type: FETCH_MESSAGES
  };
  const state = messagesReducer(messages, action);
  expect(state.loading).toBe(true);
});

test('should fetch messages', () => {
  const newMessages =  [
    { timestamp: 10, text: 'Message', userId: 0 },
    { timestamp: 10, text: 'Message reply', userId: 1 }
  ]
  const action = {
    type: FETCH_MESSAGES_SUCCESS,
    payload: {
      messages: newMessages
    }
  }
  const state = messagesReducer(messages, action);
  expect(state.messages).toEqual([...messages.messages, ...newMessages]);
  expect(state.loading).toBe(false);
});
