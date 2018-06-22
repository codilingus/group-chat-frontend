import {
  clearMessageBoard,
  fetchMessages,
  fetchMessagesSuccess,
  fetchMessagesFailure
} from '../../state/messages';
import messages from '../fixtures/messages'


const CLEAR_MESSAGE_BOARD = 'messages: clear-message-board';
const FETCH_MESSAGES = 'messages: fetch-messages';
const FETCH_MESSAGES_SUCCESS = 'messages: fetch-messages-success';
const FETCH_MESSAGES_FAILURE = 'messages: fetch-messages-failure';

test('should create clear-message-board action', () => {
  const action = clearMessageBoard();
  expect(action).toEqual({ type: CLEAR_MESSAGE_BOARD });
});

test('should create fetch-messages action', () => {
  const action = fetchMessages();
  expect(action).toEqual({ type: FETCH_MESSAGES });
});

test('should create fetch-messages-success action', () => {
  const action = fetchMessagesSuccess(messages.messages);
  expect(action).toEqual({ 
    type: FETCH_MESSAGES_SUCCESS,
    payload:  messages.messages
  });
});

test('should create fetch-messages-failure action', () => {
  const action = fetchMessagesFailure();
  expect(action).toEqual({ type: FETCH_MESSAGES_FAILURE });
});
