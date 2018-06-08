import { post, toJSON } from '../utils/index.js';

export const registerUser = (name, username, surname,
  password, email) => post(
    'http://localhost:8080/registration',
    {
      name, username, surname,
      password, email
    }
  ).then(toJSON);
