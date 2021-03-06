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

    const repositories = [1, 2].map(i =>
      ({ name: `repo${i}`, description: `description${i}`, link: `link${i}` })
    );

    it('should provide the initial state', () => {
      expect(index(undefined, { type: 'NONE' })).toEqual(initialState);
    });

    it('should handle the FETCH_REPOSITORIES_REQUEST action', () => {
      const action = { type: 'FETCH_REPOSITORIES_REQUEST', username: 'user' };

      expect(index(initialState, action)).toEqual(
        Object.assign({}, initialState, { isFetching: true })
      );
    });

    it('should handle the FETCH_REPOSITORIES_SUCCESS action', () => {
      const username = 'user';
      const action = { type: 'FETCH_REPOSITORIES_SUCCESS', repositories, username };

      expect(index(initialState, action)).toEqual(
        Object.assign({}, initialState, { repositories, username })
      );
    });

    it('should handle the FETCH_REPOSITORIES_FAILURE action', () => {
      const username = 'user';
      const error = 'Fake error';
      const action = { type: 'FETCH_REPOSITORIES_FAILURE', repositories, username, error };

      expect(index(initialState, action)).toEqual(
        Object.assign({}, initialState, { username, error })
      );
    });

    it('should ignore unknown actions', () => {
      expect(index(initialState, { type: 'unknown' })).toEqual(initialState);
    });
  });

});
