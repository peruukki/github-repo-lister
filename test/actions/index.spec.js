import expect from 'expect';
import * as actions from '../../src/actions';

describe('actions', () => {

  describe('index', () => {
    const username = 'user';

    it('fetchRepositoriesRequest should create the FETCH_REPOSITORIES_REQUEST action', () => {
      expect(actions.fetchRepositoriesRequest(username)).toEqual({
        type: 'FETCH_REPOSITORIES_REQUEST',
        username
      });
    });

    it('fetchRepositoriesSuccess should create the FETCH_REPOSITORIES_SUCCESS action with normalized repositories', () => {
      const repositories = [
        { name: 'repo1', description: 'desc1', html_url: 'url1', extra_field: 'extra1' },
        { name: 'repo2', description: 'desc2', html_url: 'url2', extra_field: 'extra2' }
      ];

      expect(actions.fetchRepositoriesSuccess(username, repositories)).toEqual({
        type: 'FETCH_REPOSITORIES_SUCCESS',
        username,
        repositories: [
          { name: 'repo1', description: 'desc1', link: 'url1' },
          { name: 'repo2', description: 'desc2', link: 'url2' }
        ]
      });
    });

    it('fetchRepositoriesFailure should create the FETCH_REPOSITORIES_FAILURE action with "user not found" error', () => {
      const error = { response: { status: 404 } };

      expect(actions.fetchRepositoriesFailure(username, error)).toEqual({
        type: 'FETCH_REPOSITORIES_FAILURE',
        username,
        error: 'User "user" not found'
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
  });

});
