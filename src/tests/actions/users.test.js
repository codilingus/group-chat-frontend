import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from '../../state/users';

const FETCH_USERS = 'users: fetch-users';
const FETCH_USERS_SUCCESS = 'users: fetch-users-success';
const FETCH_USERS_FAILURE = 'users: fetch-users-failure';

test('should create fetch-users action', () => {
  const action = fetchUsers();
  expect(action).toEqual({ type: FETCH_USERS });
});

test('should create fetch-users-success-action', () => {
  const users = [
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
  const action = fetchUsersSuccess(users);
  expect(action).toEqual({
    type: FETCH_USERS_SUCCESS,
    payload: users
  });
});
