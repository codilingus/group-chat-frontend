import { get, toJSON, b64EncodeUnicode } from '../utils/index';

export const logInUser = ({ username, password }) => get(
  'http://d19097ee.ngrok.io/me',
  {
    headers: {
      authorization: 'Basic ' + b64EncodeUnicode(`${username}:${password}`)
    }
  }
).then(toJSON);
