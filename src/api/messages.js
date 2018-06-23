import { get, toJSON } from '../utils/index';

export const fetchMessages = ({ conversationId, timestamp }) => get(
  'http://52e5b6fb.ngrok.io' + createGetMessageQueryString(conversationId, timestamp)
).then(toJSON);

const createGetMessageQueryString = (conversationId, timestamp) => {
  if (timestamp) {
    return `/messages/private/${conversationId}?newerThan=${timestamp}`;
  }
  return `/messages/private/${conversationId}`;
};
