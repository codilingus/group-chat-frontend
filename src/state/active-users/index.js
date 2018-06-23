import { handleActions, createAction } from 'redux-actions';

const initialState = [0];

const FETCH_ACTIVE_USERS = 'active-users: fetch-active-users';
const FETCH_ACTIVE_USERS_SUCCESS = 'active-users: fetch-active-users-success';
const FETCH_ACTIVE_USERS_FAILURE = 'active-users: fetch-active-users-failure';

export const activeUsersReducer = handleActions({
  [FETCH_ACTIVE_USERS_SUCCESS]: (state, { payload }) => [
    ...payload.activeUsers
  ]
}, initialState);

export const fetchActiveUsers = createAction(FETCH_ACTIVE_USERS);
export const fetchActiveUsersSuccess = createAction(FETCH_ACTIVE_USERS_SUCCESS);
export const fetchActiveUsersFailure = createAction(FETCH_ACTIVE_USERS_FAILURE);
