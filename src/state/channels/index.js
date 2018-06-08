import { handleActions, createAction } from 'redux-actions';

const initialState = [];

export const ADD_NEW_CHANNEL = 'channels: add-new-channel';
const ADD_NEW_CHANNEL_SUCCESS = 'channels: add-new-channel-success';
const ADD_NEW_CHANNEL_FAILURE = 'channels: add-new-channel-failure';

export const channelsReducer = handleActions({

  [ADD_NEW_CHANNEL_SUCCESS]: (state, { payload }) => [
    ...state,
    payload
  ]

}, initialState);

export const addNewChannel = createAction(ADD_NEW_CHANNEL);
export const addNewChannelSuccess = createAction(ADD_NEW_CHANNEL_SUCCESS);
export const addNewChannelFailure = createAction(ADD_NEW_CHANNEL_FAILURE);
