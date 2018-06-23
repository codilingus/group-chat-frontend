import { get, toJSON } from '../utils/index';

export const fetchMessages = ({ conversationId, timestamp }) => Promise.resolve(
  [
    { timestamp: 10, text: 'Message', userId: 0 },
    { timestamp: 10, text: 'Message reply', userId: 1 }
  ]
)
// get(
//   'http://localhost:8080' + createGetMessageQueryString(id, timestamp)
// ).then(toJSON);

const createGetMessageQueryString = (conversationId, timestamp) => {
  if (timestamp) {
    return `/messages/private/${conversationId}?newerThan=${timestamp}`;
  }
  return `/messages/private/${conversationId}`;
};
