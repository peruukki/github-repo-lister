// @flow
import expect from 'expect';
import index from '../../src/reducers';

describe('reducers', () => {

  describe('index', () => {
    const initialState = {
      isFetching: false,
      username: null,
      repositories: [],
      error: null
    };

    it('should provide the initial state', () => {
      expect(index(undefined, {})).toEqual(initialState);
    });

    it('should handle the FETCH_REPOSITORIES_REQUEST action', () => {
      const action = { type: 'FETCH_REPOSITORIES_REQUEST', username: 'user' };

      expect(index(initialState, action)).toEqual(
        Object.assign({}, initialState, { isFetching: true })
      );
    });

    it('should handle the FETCH_REPOSITORIES_SUCCESS action', () => {
      const repositories = [{ name: 'repo1' }, { name: 'repo2' }];
      const username = 'user';
      const action = { type: 'FETCH_REPOSITORIES_SUCCESS', repositories, username };

      expect(index(initialState, action)).toEqual(
        Object.assign({}, initialState, { repositories, username })
      );
    });

    it('should handle the FETCH_REPOSITORIES_FAILURE action', () => {
      const repositories = [{ name: 'repo1' }, { name: 'repo2' }];
      const username = 'user';
      const error = 'Fake error';
      const action = { type: 'FETCH_REPOSITORIES_FAILURE', repositories, username, error };

      expect(index(initialState, action)).toEqual(
        Object.assign({}, initialState, { username, error })
      );
    });

    it('should ignore unknown actions', () => {
      expect(index(1, { type: 'unknown' })).toEqual(1);
    });
  });

});
