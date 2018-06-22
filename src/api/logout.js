import { get, toJSON } from '../utils/index';

export const logOutUser = () => get(
  'http://d19097ee.ngrok.io/logout'
);