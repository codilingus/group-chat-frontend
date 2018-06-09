import { toJSON } from '../utils/index';

export const fetchMessages = ({ id, timestamp }) => fetch(
  'http://localhost:8080' + createGetMessageQueryString(id, timestamp)
).then(toJSON);

const createGetMessageQueryString = (id, timestamp) => {
  `/messages/private/${id}?newerThan=${timestamp}`
};
