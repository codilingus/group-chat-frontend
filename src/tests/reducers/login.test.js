import { sessionUserReducer } from '../../state/session-user';
import login from '../fixtures/session-user'

const LOGIN = 'session-user: login';
const LOGIN_SUCCESS = 'session-user: login-success';
const LOGIN_FAILURE = 'session-user: login-failure';

test('should setup login default values', () => {
  const state = sessionUserReducer(undefined, { type: '@@INIT' });
  expect(state.loading).toEqual(login.loading);
});

test('should set login loading as true', () => {
  const state = sessionUserReducer(login, { type: LOGIN });
  expect(state.loading).toEqual(true);
});

test('should set login invalidLogin as true and loading as false', () => {
  login.loading = true;
  const state = sessionUserReducer(login, { type: LOGIN_FAILURE });
  expect(state.loading).toEqual(false);
  expect(state.invalidLogin).toEqual(true);
});
