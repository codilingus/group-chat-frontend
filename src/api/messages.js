import { toJSON } from '../utils/index';

export const fetchMessages = (name, timestamp) => fetch(
  'http://localhost:8080' + createGetMessageQueryString(name, timestamp)
).then(toJSON);

const createGetMessageQueryString = (name, timestamp) => {
  `/messages/${name}?newerThan=${timestamp}`
};
