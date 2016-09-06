// @flow
import fetch from 'isomorphic-fetch';

function checkStatus(response: FetchErrorResponse): FetchErrorResponse {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error: FetchError = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function failingFetch(url: string): Promise<Array<APIRepository>> {
  return fetch(url)
    .catch(error => {
      throw new Error('Network error, check your internet connection.');
    })
    .then(checkStatus)
    .then(response => response.json());
}

export default failingFetch;
