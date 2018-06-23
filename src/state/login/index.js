import { handleActions, createAction } from 'redux-actions';

const initialState = ({
  loading: false,
  invalidLogin: 'false'
});

export const LOGIN = 'login: login';
const LOGIN_SUCCESS = 'login: login-success';
const LOGIN_FAILURE = 'login: login-failure';

export const loginReducer = handleActions({
  [LOGIN]: (state) => ({
    ...state,
    loading: true,
    invalidLogin: false,
  }),

  [LOGIN_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    invalidLogin: false
  }),

  [LOGIN_FAILURE]: (state) => ({
    ...state,
    loading: false,
    invalidLogin: true
  })
}, initialState);
  
export const logIn = createAction(LOGIN);
export const logInSuccess = createAction(LOGIN_SUCCESS);
export const logInFailure = createAction(LOGIN_FAILURE);
