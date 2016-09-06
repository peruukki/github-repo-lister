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

export const fetchRepositoriesRequest = (username: string) => ({
  type: 'FETCH_REPOSITORIES_REQUEST',
  username
});

export const fetchRepositoriesSuccess = (username: string, repositories: Array<APIRepository>) => ({
  type: 'FETCH_REPOSITORIES_SUCCESS',
  username,
  repositories: normalizeRepositories(repositories)
});

export const fetchRepositoriesFailure = (username: string, error: FetchError) => ({
  type: 'FETCH_REPOSITORIES_FAILURE',
  username,
  error: normalizeErrorMessage(username, error)
});

export const fetchRepositories = (username: string) => {
  return (dispatch: Function) => {
    dispatch(fetchRepositoriesRequest(username));
    return fetch(repositoriesUrl(username))
      .then(json => dispatch(fetchRepositoriesSuccess(username, json)))
      .catch(error => dispatch(fetchRepositoriesFailure(username, error)));
  };
};
