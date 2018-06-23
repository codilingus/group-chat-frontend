import { get, toJSON, b64EncodeUnicode } from '../utils/index';

export const logInUser = ({ username, password }) => get(
  'http://52e5b6fb.ngrok.io/me',
  {
    headers: {
      authorization: 'Basic ' + b64EncodeUnicode(`${username}:${password}`)
    }
  }
).then(toJSON);
