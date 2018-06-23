import { get } from '../utils/index';

export const logOutUser = () => get(
  'http://52e5b6fb.ngrok.io/logout'
);