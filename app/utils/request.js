import 'whatwg-fetch';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.reponse = response;
  throw error;
}

export function requestEdit(url, object) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function requestPost(url, object) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function requestGet(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
