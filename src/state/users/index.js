import { handleActions, createAction } from 'redux-actions';

const initialState = [
  {
    name: 'Joanna',
    id: 0,
    username: 'Asia'
  },
  {
    name: 'Aleksandra',
    id: 1,
    username: 'Ola'
  }
];

export const FETCH_USERS = 'users: fetch-users';
const FETCH_USERS_SUCCESS = 'users: fetch-users-success';
const FETCH_USERS_FAILURE = 'users: fetch-users-failure';

export const usersReducer = handleActions({

  [FETCH_USERS_SUCCESS]: (state, { users }) => {
    return [
      ...state,
      ...users
    ]
  }
}, initialState);

export const fetchUsers = createAction(FETCH_USERS);
export const fetchUsersSuccess = createAction(FETCH_USERS_SUCCESS);
export const fetchUsersFailure = createAction(FETCH_USERS_FAILURE);
