import { get, toJSON } from '../utils/index';

export const fetchMessages = ({ id, timestamp }) => Promise.resolve(
  [
    { timestamp: 10, text: 'Message', userId: 0 },
    { timestamp: 10, text: 'Message reply', userId: 1 }
  ]
)
// get(
//   'http://localhost:8080' + createGetMessageQueryString(id, timestamp)
// ).then(toJSON);

const createGetMessageQueryString = (id, timestamp) => {
  if (timestamp) {
    return `/messages/private/${id}?newerThan=${timestamp}`;
  }
  else {
    return `/messages/private/${id}`;
  }
};
