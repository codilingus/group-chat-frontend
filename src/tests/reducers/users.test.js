import { usersReducer } from '../../state/users';
import users from '../fixtures/users';

const FETCH_USERS_SUCCESS = 'users: fetch-users-success';

test('should setup default users values', () => {
  const state = usersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(users);
});

test('should fetch users with success', () => {
  const newUsers = [{
    name: 'Mikolaj',
    id: 6,
    username: 'Miki'
  },
  {
    name: 'Robert',
    id: 4,
    username: 'Bercik'
  }];
  const action = {
    type: FETCH_USERS_SUCCESS,
    users: newUsers
  }
  const state = usersReducer(users, action);
  expect(state).toEqual([...users, ...newUsers])
});
