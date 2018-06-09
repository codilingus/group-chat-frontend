import { post, toJSON, b64EncodeUnicode } from '../utils/index';

export const loginUser = ({ username, password }) => post(
  'http://localhost:8080/login',
  null,
  {
    headers: {
      authorization: 'Basic ' + b64EncodeUnicode(`${username}:${password}`)
    }
  }
).then(toJSON);
