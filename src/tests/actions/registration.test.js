import {
  addNewUser,
  addNewUserSuccess,
  addNewUserFailure
} from '../../state/current-user';

const ADD_NEW_USER = 'current-user: add-new-user';
const ADD_NEW_USER_SUCCESS = 'current-user: add-new-user-success';
const ADD_NEW_USER_FAILURE = 'current-user: add-new-user-failure';

test('should set up add-new-user action', () => {
  const userData = {
    name: 'Ada',
    password: '123',
    username: 'adka',
    mail: 'ada@gmail.com'
  }
  const action = addNewUser(userData);
  expect(action).toEqual({
    type: ADD_NEW_USER,
    payload: userData
  });
});

test('should create add-new-user-success action', () => {
  const action = addNewUserSuccess();
  expect(action).toEqual({ type: ADD_NEW_USER_SUCCESS });
});

test('should create add-new-user-failure action', () => {
  const action = addNewUserFailure();
  expect(action).toEqual({ type: ADD_NEW_USER_FAILURE });
});
