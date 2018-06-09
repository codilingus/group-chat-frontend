import { handleAction, createAction, handleActions } from 'redux-actions';

const initialState = {
  messages: []
};

export const FETCH_MESSAGES = 'messages: fetch-messages';
const FETCH_MESSAGES_SUCCESS = 'messages: fetch-messages-success';
const FETCH_MESSAGES_FAILURE = 'messages: fetch-messages-failure';

export const messagesReducer = handleActions({

  [FETCH_MESSAGES_SUCCESS]: (state, { payload }) => ({
    ...state,
    
  })

}, initialState);

export const fetchMessages = createAction(FETCH_MESSAGES);
export const fetchMessagesSuccess = createAction(FETCH_MESSAGES_SUCCESS);
export const fetchMessagesFailure = createAction(FETCH_MESSAGES_FAILURE);
