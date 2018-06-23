<<<<<<< HEAD
import { logIn, logInSuccess, logInFailure } from '../../state/session-user';

const LOGIN = 'session-user: login';
const LOGIN_SUCCESS = 'session-user: login-success';
const LOGIN_FAILURE = 'session-user: login-failure';
=======
import { logIn, logInSuccess, logInFailure } from '../../state/login';

const LOGIN = 'login: login';
const LOGIN_SUCCESS = 'login: login-success';
const LOGIN_FAILURE = 'login: login-failure'
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94

test('should create login action', () => {
  const userData = {
    username: 'Stasik',
    password: 'Kazik'
  };
  const action = logIn(userData);
  expect(action).toEqual({
    type: LOGIN,
    payload: userData
  });
});

test('should create login-success action', () => {
  const action = logInSuccess();
  expect(action).toEqual({ type: LOGIN_SUCCESS });
});

test('should create login-failure action', () => {
  const action = logInFailure();
  expect(action).toEqual({ type: LOGIN_FAILURE });
});
