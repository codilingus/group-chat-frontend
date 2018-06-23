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

<<<<<<< HEAD
  [START_CONVERSATION]: (state) => ({
    ...state,
    messages: [],
    loading: true
=======
  [CLEAR_MESSAGE_BOARD]: (state, { payload }) => ({
    ...state,
    messages: [{}]
  }),

  [FETCH_MESSAGES]: (state, { payload }) => ({
    ...state,
    loading: true,
    id: payload.id
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
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

export const startConversation = createAction(START_CONVERSATION);
export const fetchMessagesSuccess = createAction(FETCH_MESSAGES_SUCCESS);
export const fetchMessagesFailure = createAction(FETCH_MESSAGES_FAILURE);
