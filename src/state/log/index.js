import { handleActions, createAction } from 'redux-actions';

const initialState = ({
  loading: false,
  activeUser: null
});

export const LOGIN = 'login: login';
const LOGIN_SUCCESS = 'login: login-success';
const LOGIN_FAILURE = 'login: login-failure';
export const LOGOUT = 'logout: logout';
const LOGOUT_SUCCESS = 'logout: logout-success';
const LOGOUT_FAILURE = 'logout: logout-failure';

export const logReducer = handleActions({
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
