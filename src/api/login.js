import { post, toJSON } from '../utils/index';

export const loginUser = ({ username, password }) => post(
  'http://localhost:8080/login',
  { username, password }
).then(toJSON);