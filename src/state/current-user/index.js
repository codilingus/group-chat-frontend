import { handleActions, createAction } from 'redux-actions';

const initialState = ({
  
});

export const ADD_NEW_USER = 'current-user: add-new-user';
const ADD_NEW_USER_SUCCESS = 'current-user: add-new-user-success';
const ADD_NEW_USER_FAILURE = 'current-user: add-new-user-failure';

export const currentUserReducer = handleActions({

}, initialState);

export const addNewUser = createAction(ADD_NEW_USER,
  username => username,
  password => password,
  mail => mail
);

export const addNewUserSuccess = createAction(ADD_NEW_USER_SUCCESS);
export const addNewUserFailure = createAction(ADD_NEW_USER_FAILURE);
