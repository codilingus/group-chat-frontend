import { createAction, handleActions } from 'redux-actions';

const initialState = {
  messages: [
    { text: 'hello', timestamp: 3, userId: 0 },
    { text: 'world', timestamp: 4, userId: 1 }
  ],
  loading: false,
  conversationId: 5,
  conversetionist: 1
};

export const START_CONVERSATION = 'messages: start-conversation';
export const FETCH_MESSAGES_SUCCESS = 'messages: fetch-messages-success';
const FETCH_MESSAGES_FAILURE = 'messages: fetch-messages-failure';

export const messagesReducer = handleActions({

  [START_CONVERSATION]: (state) => ({
    ...state,
    messages: []
  }),

  [FETCH_MESSAGES_SUCCESS]: (state, { payload }) => ({
    ...state,
    messages: [
      ...state.messages,
      ...payload.messages,
    ]
  })

}, initialState);

export const startConversation = createAction(START_CONVERSATION);
export const fetchMessagesSuccess = createAction(FETCH_MESSAGES_SUCCESS);
export const fetchMessagesFailure = createAction(FETCH_MESSAGES_FAILURE);
