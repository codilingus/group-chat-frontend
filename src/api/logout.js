import { get, toJSON } from '../utils/index';

export const logOutUser = ({ username, password }) => get(
  'http://localhost:8080/logout',
  { username, password }
).then(toJSON);