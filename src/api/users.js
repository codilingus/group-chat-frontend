import { get, toJSON } from '../utils';

export const fetchUsers = () => get('http://52e5b6fb.ngrok.io/users')
  .then(toJSON);

export const fetchActiveUsers = () => Promise.resolve([
  1, 2, 3
]);
// get('http://localhost:8080/users/active')
//   .then(toJSON);

