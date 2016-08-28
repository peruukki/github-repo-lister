import React, { Component } from 'react';
import './UsernameInput.css';

class UsernameInput extends Component {
  static propTypes = {
    error: React.PropTypes.string,
    isFetching: React.PropTypes.bool.isRequired,
    onUsernameSubmit: React.PropTypes.func.isRequired
  };

  submitUsername(e) {
    e.preventDefault();
    if (!this.props.isFetching) {
      this.props.onUsernameSubmit(this.refs.usernameInput.value);
    }
  }

  renderError(message) {
    return <div className="UsernameInput-error">{message}</div>;
  }

  render() {
    return (
      <div className="UsernameInput">
        <form onSubmit={this.submitUsername.bind(this)}>
          <label className="UsernameInput-username-label" htmlFor="username">GitHub Username:</label>
          <input id="username" ref="usernameInput" className="UsernameInput-search-box" type="text" placeholder="Search..." />
          <button className="UsernameInput-submit-button" type="submit" disabled={this.props.isFetching}>Go!</button>
        </form>
        {this.props.error ? this.renderError(this.props.error) : null}
      </div>
    );
  }
}

export default UsernameInput;
