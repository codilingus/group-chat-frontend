import { post, toJSON } from '../utils';

// export const addNewChannel = (name) => Promise.resolve({
//   name,
//   id: 0,
//   members: ['Anna', 'Tomasz']
// });
export const addNewChannel = (name) => post(
  'http://52e5b6fb.ngrok.io/channels',
  {
    name
  }
).then(toJSON);
