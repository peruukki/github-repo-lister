// @flow
const initialState = {
  isFetching: false,
  username: null,
  repositories: [],
  error: null
};

function repositories(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'FETCH_REPOSITORIES_REQUEST':
      return {
        ...state,
        isFetching: true,
        username: null,
        error: null
      };
    case 'FETCH_REPOSITORIES_SUCCESS':
      return {
        ...state,
        isFetching: false,
        username: action.username,
        repositories: action.repositories,
        error: null
      };
    case 'FETCH_REPOSITORIES_FAILURE':
      return {
        ...state,
        isFetching: false,
        username: action.username,
        repositories: [],
        error: action.error
      };
    default:
      return state;
  }
}

export default repositories;
