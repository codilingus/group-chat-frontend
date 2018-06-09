import { handleAction, createAction, handleActions } from 'redux-actions';
import { get, last } from 'lodash';

const initialState = {
  messages: [],
  loading: false,
  timestamp: 0
};

export const FETCH_MESSAGES = 'messages: fetch-messages';
export const FETCH_MESSAGES_SUCCESS = 'messages: fetch-messages-success';
const FETCH_MESSAGES_FAILURE = 'messages: fetch-messages-failure';

export const messagesReducer = handleActions({

  [FETCH_MESSAGES]: (state) => ({
    ...state,
    loading: true
  }),

  [FETCH_MESSAGES_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    messages: [
      ...state.messages,
      payload.messages,
    ],
    timestamp: get('last(payload.messages)[0].timestamp')
  })

}, initialState);

export const fetchMessages = createAction(FETCH_MESSAGES);
export const fetchMessagesSuccess = createAction(FETCH_MESSAGES_SUCCESS);
export const fetchMessagesFailure = createAction(FETCH_MESSAGES_FAILURE);
