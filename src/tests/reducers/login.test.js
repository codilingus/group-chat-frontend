<<<<<<< HEAD
import { sessionUserReducer } from '../../state/session-user';
import login from '../fixtures/session-user'

const LOGIN = 'session-user: login';
const LOGIN_SUCCESS = 'session-user: login-success';
const LOGIN_FAILURE = 'session-user: login-failure';

test('should setup login default values', () => {
  const state = sessionUserReducer(undefined, { type: '@@INIT' });
=======
import { loginReducer } from '../../state/login';
import login from '../fixtures/login'

const LOGIN = 'login: login';
const LOGIN_SUCCESS = 'login: login-success';
const LOGIN_FAILURE = 'login: login-failure';

test('should setup login default values', () => {
  const state = loginReducer(undefined, { type: '@@INIT' });
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
  expect(state.loading).toEqual(login.loading);
});

test('should set login loading as true', () => {
<<<<<<< HEAD
  const state = sessionUserReducer(login, { type: LOGIN });
=======
  const state = loginReducer(login, { type: LOGIN });
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
  expect(state.loading).toEqual(true);
});

test('should set login invalidLogin as true and loading as false', () => {
  login.loading = true;
<<<<<<< HEAD
  const state = sessionUserReducer(login, { type: LOGIN_FAILURE });
=======
  const state = loginReducer(login, { type: LOGIN_FAILURE });
>>>>>>> e4e43441855ba2ad17c64e3c3509e38a4dc6cc94
  expect(state.loading).toEqual(false);
  expect(state.invalidLogin).toEqual(true);
});
