import { get, toJSON, b64EncodeUnicode } from '../utils/index';

export const loginUser = ({ username, password }) => get(
  'http://8daa62b2.ngrok.io/me',
  {
    headers: {
      authorization: 'Basic ' + b64EncodeUnicode(`${username}:${password}`)
    }
  }
).then(toJSON);
