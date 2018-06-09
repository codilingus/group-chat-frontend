import { post, toJSON } from '../utils/index';

export const logOutUser = ({ username, password }) => post(
  'http://localhost:8080/logout',
  { username, password }
).then(toJSON);