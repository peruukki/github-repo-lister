import fetch from 'isomorphic-fetch';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const failingFetch = (url) =>
  fetch(url)
    .then(checkStatus)
    .then(response => response.json());

export default failingFetch;