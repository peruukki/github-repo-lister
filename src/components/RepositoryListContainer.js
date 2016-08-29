import { connect } from 'react-redux';

import RepositoryList from './RepositoryList';

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  username: state.username,
  repositories: state.repositories,
  error: state.error
});

const RepositoryListContainer = connect(
  mapStateToProps
)(RepositoryList);

export default RepositoryListContainer;
