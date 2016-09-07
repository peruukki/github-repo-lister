import { connect } from 'react-redux';

import { fetchRepositories } from '../actions';
import UsernameInput from './UsernameInput';

const mapStateToProps = (state: State) => ({
  error: state.error,
  isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onUsernameSubmit: (username) => {
    if (username) {
      dispatch(fetchRepositories(username));
    }
  }
});

const UsernameInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsernameInput);

export default UsernameInputContainer;
