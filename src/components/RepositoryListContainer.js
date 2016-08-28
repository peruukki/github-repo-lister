import { connect } from 'react-redux';

import RepositoryList from './RepositoryList';

const mapStateToProps = (state) => ({
  username: state.username,
  repositories: state.repositories
});

const RepositoryListContainer = connect(
  mapStateToProps
)(RepositoryList);

export default RepositoryListContainer;
