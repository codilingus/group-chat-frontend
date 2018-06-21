import { loginReducer } from '../../state/login';
import login from '../fixtures/login'

const LOGIN = 'login: login';
const LOGIN_SUCCESS = 'login: login-success';
const LOGIN_FAILURE = 'login: login-failure';

test('should setup login default values', () => {
  const state = loginReducer(undefined, { type: '@@INIT' });
  expect(state.loading).toEqual(login.loading);
});

test('should set login loading as true', () => {
  const state = loginReducer(login, { type: LOGIN });
  expect(state.loading).toEqual(true);
});

test('should set login invalidLogin as true and loading as false', () => {
  login.loading = true;
  const state = loginReducer(login, { type: LOGIN_FAILURE });
  expect(state.loading).toEqual(false);
  expect(state.invalidLogin).toEqual(true);
});
