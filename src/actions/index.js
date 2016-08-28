import fetch from './utils/fetch';

const repositoriesUrl = (username) => `https://api.github.com/users/${username}/repos`;
//const repositoriesUrl = (username) => 'http://localhost:8080/repos.json';

const normalizeRepositories = (repositories) =>
  repositories.map((repository) => ({
    name: repository.name,
    description: repository.description,
    link: repository.html_url
  }));

const normalizeErrorMessage = (username, error) => {
  if (error.response && error.response.status === 403) {
    return 'GitHub API rate limit exceeded, try again later.';
  }
  if (error.response && error.response.status === 404) {
    return `User "${username}" not found.`;
  }
  return error.toString();
};

export const fetchRepositoriesRequest = (username) => ({
  type: 'FETCH_REPOSITORIES_REQUEST',
  username
});

export const fetchRepositoriesSuccess = (username, repositories) => ({
  type: 'FETCH_REPOSITORIES_SUCCESS',
  username,
  repositories: normalizeRepositories(repositories)
});

export const fetchRepositoriesFailure = (username, error) => ({
  type: 'FETCH_REPOSITORIES_FAILURE',
  username,
  error: normalizeErrorMessage(username, error)
});

export const fetchRepositories = (username) => {
  return (dispatch) => {
    dispatch(fetchRepositoriesRequest(username));
    return fetch(repositoriesUrl(username))
      .then(json => dispatch(fetchRepositoriesSuccess(username, json)))
      .catch(error => dispatch(fetchRepositoriesFailure(username, error)));
  };
};
