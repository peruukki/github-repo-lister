import { connect } from 'react-redux';

import { fetchRepositories } from '../actions';
import UsernameInput from './UsernameInput';

const mapDispatchToProps = (dispatch) => ({
  onUsernameSubmit: (username) => {
    dispatch(fetchRepositories(username));
  }
});

const UsernameInputContainer = connect(
  null,
  mapDispatchToProps
)(UsernameInput);

export default UsernameInputContainer;
