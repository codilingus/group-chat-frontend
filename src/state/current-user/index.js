import { handleActions, createAction } from 'redux-actions';

const initialState = ({
  isActive: false
});

export const ADD_NEW_USER = 'current-user: add-new-user';
const ADD_NEW_USER_SUCCESS = 'current-user: add-new-user-success';
const ADD_NEW_USER_FAILURE = 'current-user: add-new-user-failure';

export const currentUserReducer = handleActions({
  [ADD_NEW_USER_SUCCESS]: (state) => ({
    ...state,
    isActive: true
  })
}, initialState);

export const addNewUser = createAction(ADD_NEW_USER);
export const addNewUserSuccess = createAction(ADD_NEW_USER_SUCCESS);
export const addNewUserFailure = createAction(ADD_NEW_USER_FAILURE);
