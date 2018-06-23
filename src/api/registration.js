import { post, toJSON } from '../utils/index.js';

export const registerUser = ({ name, username, surname, password, email }) => post(
  'http://52e5b6fb.ngrok.io/registration',
  { name, username, surname, password, email }
).then(toJSON);
