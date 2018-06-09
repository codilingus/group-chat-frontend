import { handleActions, createAction } from 'redux-actions';

const initialState = ({
  loading: false
});

export const LOGOUT = 'logout: logout';
const LOGOUT_SUCCESS = 'logout: logout-success';
const LOGOUT_FAILURE = 'logout: logout-failure';

export const loginReducer = handleActions({
  [LOGOUT]: (state) => ({
    ...state,
    loading: true
  }),

  [LOGOUT_SUCCESS]: (state) => ({
    ...state,
    loading: false
  }),

  [LOGOUT_FAILURE]: (state) => ({
    ...state,
    loading: false
  })
}, initialState);

export const logOut = createAction(LOGOUT);
export const logOutSuccess = createAction(LOGOUT_SUCCESS);
export const logOutFailure = createAction(LOGOUT_FAILURE);