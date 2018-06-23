import { logIn, logInSuccess, logInFailure } from '../../state/session-user';

const LOGIN = 'session-user: login';
const LOGIN_SUCCESS = 'session-user: login-success';
const LOGIN_FAILURE = 'session-user: login-failure';

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
