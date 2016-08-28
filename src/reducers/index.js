const initialState = {
  isFetching: false,
  username: '',
  repositories: [],
  error: null
};

const repositories = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REPOSITORIES_REQUEST':
      return {
        ...state,
        isFetching: true,
        username: action.username,
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
};

export default repositories;
