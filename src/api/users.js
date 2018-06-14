import { get, toJSON } from '../utils';

export const fetchUsers = () => get('http://localhost:8080/users')
  .then(toJSON);
