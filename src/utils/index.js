export const post = (url, body, additionalConfig = {}) => fetch(url, {
  method: 'POST',
  'credentials': 'include',
  ...additionalConfig,
  body: body && JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    ...additionalConfig.headers,
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

export function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
          return String.fromCharCode('0x' + p1);
  }));
}
