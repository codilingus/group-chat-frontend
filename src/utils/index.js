export const post = (url, body, additionalConfig = {}) => fetch(url, {
  method: 'POST',
  'credentials': 'include',
  ...additionalConfig,
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    ...additionalConfig.headers
  }
});

export const toJSON = (response) => response.json();

export const get = (url, additionalConfig = {}) => fetch(url, {
  method: 'GET',
  'credentials': 'include',
  ...additionalConfig,
  headers: {
    'Content-Type': 'application/json',
    ...additionalConfig.headers
  }
});
