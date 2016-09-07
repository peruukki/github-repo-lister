// @flow
import fetch from './utils/fetch';

function repositoriesUrl(username: string): string {
  return `https://api.github.com/users/${username}/repos`;
}

function normalizeRepositories(repositories: Array<APIRepository>): Array<Repository> {
  return repositories.map((repository) => ({
    name: repository.name,
    description: repository.description,
    link: repository.html_url
  }));
}

function normalizeErrorMessage(username: string, error: FetchError): string {
  if (error.response && error.response.status === 403) {
    return 'GitHub API rate limit exceeded, try again later.';
  }
  if (error.response && error.response.status === 404) {
    return `User "${username}" not found.`;
  }
  return error.toString();
};

export function fetchRepositoriesRequest(username: string): Action {
  return {
    type: 'FETCH_REPOSITORIES_REQUEST',
    username
  };
};

export function fetchRepositoriesSuccess(username: string, repositories: Array<APIRepository>): Action {
  return {
    type: 'FETCH_REPOSITORIES_SUCCESS',
    username,
    repositories: normalizeRepositories(repositories)
  };
};

export function fetchRepositoriesFailure(username: string, error: FetchError): Action {
  return {
    type: 'FETCH_REPOSITORIES_FAILURE',
    username,
    error: normalizeErrorMessage(username, error)
  };
};

export function fetchRepositories(username: string) {
  return (dispatch: Dispatch) => {
    dispatch(fetchRepositoriesRequest(username));
    return fetch(repositoriesUrl(username))
      .then(json => dispatch(fetchRepositoriesSuccess(username, json)))
      .catch(error => dispatch(fetchRepositoriesFailure(username, error)));
  };
}
