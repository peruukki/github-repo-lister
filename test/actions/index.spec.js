import expect from 'expect';
import nock from 'nock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../src/actions';

const mockStore = configureStore([thunk]);

describe('actions', () => {

  afterEach(() => {
    nock.cleanAll();
  });

  describe('index', () => {
    const username = 'user';
    const repositories = [
      { name: 'repo1', description: 'desc1', html_url: 'url1', extra_field: 'extra1' },
      { name: 'repo2', description: 'desc2', html_url: 'url2', extra_field: 'extra2' }
    ];
    const normalizedRepositories = [
      { name: 'repo1', description: 'desc1', link: 'url1' },
      { name: 'repo2', description: 'desc2', link: 'url2' }
    ];

    it('fetchRepositoriesRequest should create the FETCH_REPOSITORIES_REQUEST action', () => {
      expect(actions.fetchRepositoriesRequest(username)).toEqual({
        type: 'FETCH_REPOSITORIES_REQUEST',
        username
      });
    });

    it('fetchRepositoriesSuccess should create the FETCH_REPOSITORIES_SUCCESS action with normalized repositories', () => {
      expect(actions.fetchRepositoriesSuccess(username, repositories)).toEqual({
        type: 'FETCH_REPOSITORIES_SUCCESS',
        username,
        repositories: normalizedRepositories
      });
    });

    it('fetchRepositoriesFailure should create the FETCH_REPOSITORIES_FAILURE action with "user not found" error', () => {
      const error = { response: { status: 404 } };

      expect(actions.fetchRepositoriesFailure(username, error)).toEqual({
        type: 'FETCH_REPOSITORIES_FAILURE',
        username,
        error: 'User "user" not found.'
      });
    });

    it('fetchRepositoriesFailure should create the FETCH_REPOSITORIES_FAILURE action with given error message', () => {
      const error = 'Fake error';

      expect(actions.fetchRepositoriesFailure(username, error)).toEqual({
        type: 'FETCH_REPOSITORIES_FAILURE',
        username,
        error
      });
    });

    it('fetchRepositories should make a GitHub API request and dispatch request and success response actions', () => {
      const apiStatus = 200;
      const apiBody = repositories;
      const expectedActions = [
        { type: 'FETCH_REPOSITORIES_REQUEST', username },
        { type: 'FETCH_REPOSITORIES_SUCCESS', username, repositories: normalizedRepositories }
      ];

      return assertAsyncFetchActions(apiStatus, apiBody, expectedActions);
    });

    it('fetchRepositories should make a GitHub API request and dispatch request and failure response actions', () => {
      const apiStatus = 403;
      const apiBody = {
        message: 'API rate limit exceeded for xxx.xxx.xxx.xxx. (But here\'s the good news: ' +
                 'Authenticated requests get a higher rate limit. Check out the documentation for more details.)',
        documentation_url: 'https://developer.github.com/v3/#rate-limiting'
      };
      const expectedActions = [
        { type: 'FETCH_REPOSITORIES_REQUEST', username },
        { type: 'FETCH_REPOSITORIES_FAILURE', username, error: 'Error: Forbidden' }
      ];

      return assertAsyncFetchActions(apiStatus, apiBody, expectedActions);
    });

    const assertAsyncFetchActions = (apiStatus, apiBody, expectedActions) => {
      // Mock GitHub API response
      nock('https://api.github.com')
        .get(`/users/${username}/repos`)
        .reply(apiStatus, apiBody);

      const store = mockStore();

      return store.dispatch(actions.fetchRepositories(username))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    };
  });
});
