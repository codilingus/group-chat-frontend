import { get, toJSON, b64EncodeUnicode } from '../utils/index';

export const loginUser = ({ username, password }) => get(
  'http://localhost:8080/me',
  {
    headers: {
      authorization: 'Basic ' + b64EncodeUnicode(`${username}:${password}`)
    }
  }
).then(toJSON);
