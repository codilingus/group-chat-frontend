import { handleActions, createAction } from 'redux-actions';

const initialState = ({
  loading: false,
  activeUser: null
});

export const LOGIN = 'session-user: login';
const LOGIN_SUCCESS = 'session-user: login-success';
const LOGIN_FAILURE = 'session-user: login-failure';
export const LOGOUT = 'session-user: logout';
const LOGOUT_SUCCESS = 'session-user: logout-success';
const LOGOUT_FAILURE = 'session-user: logout-failure';

export const sessionUserReducer = handleActions({
  [LOGIN]: (state) => ({
    ...state,
    loading: true,
    invalidLogin: false,
  }),

  [LOGIN_SUCCESS]: (state, { payload: userDetails }) => ({
    ...state,
    loading: false,
    invalidLogin: false,
    activeUser: userDetails.username
  }),

  [LOGIN_FAILURE]: (state) => ({
    ...state,
    loading: false,
    invalidLogin: true,
  }),

  [LOGOUT]: (state) => ({
    ...state,
    loading: true
  }),

  [LOGOUT_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    activeUser: null
  }),

  [LOGOUT_FAILURE]: (state) => ({
    ...state,
    loading: false
  })
}, initialState);
 
export const logIn = createAction(LOGIN);
export const logInSuccess = createAction(LOGIN_SUCCESS);
export const logInFailure = createAction(LOGIN_FAILURE);
export const logOut = createAction(LOGOUT);
export const logOutSuccess = createAction(LOGOUT_SUCCESS);
export const logOutFailure = createAction(LOGOUT_FAILURE);
