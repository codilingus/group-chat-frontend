import { createAction, handleActions } from 'redux-actions';

const initialState = {
  messages: [
    { text: 'hello', timestamp: 3, userId: 0 },
    { text: 'world', timestamp: 4, userId: 1 }
  ],
  loading: false,
  id: 5,
  conversetionist: 1
};

const CLEAR_MESSAGE_BOARD = 'messages: clear-message-board';
export const FETCH_MESSAGES = 'messages: fetch-messages';
export const FETCH_MESSAGES_SUCCESS = 'messages: fetch-messages-success';
const FETCH_MESSAGES_FAILURE = 'messages: fetch-messages-failure';

export const messagesReducer = handleActions({

  [CLEAR_MESSAGE_BOARD]: (state, { payload }) => ({
    ...state,
    messages: [{}]
  }),

  [FETCH_MESSAGES]: (state, { payload }) => ({
    ...state,
    loading: true,
    id: payload.id
  }),

  [FETCH_MESSAGES_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    messages: [
      ...state.messages,
      ...payload.messages,
    ]
  })

}, initialState);

export const clearMessageBoard = createAction(CLEAR_MESSAGE_BOARD);
export const fetchMessages = createAction(FETCH_MESSAGES);
export const fetchMessagesSuccess = createAction(FETCH_MESSAGES_SUCCESS);
export const fetchMessagesFailure = createAction(FETCH_MESSAGES_FAILURE);
