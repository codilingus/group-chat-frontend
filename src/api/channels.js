import { post, toJSON } from '../utils';

export const addNewChannel = (name) => Promise.resolve({
  name,
  id: 0,
  members: ['Anna', 'Tomasz']
});
// export const addNewChannel = (name) => post(
//   'http://localhost:8080/channels',
//   {
//     name
//   }
// ).then(toJSON);
