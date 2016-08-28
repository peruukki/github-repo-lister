import React, { Component } from 'react';
import './UsernameInput.css';

class UsernameInput extends Component {
  static propTypes = {
    error: React.PropTypes.string,
    onUsernameSubmit: React.PropTypes.func.isRequired
  };

  submitUsername(e) {
    e.preventDefault();
    this.props.onUsernameSubmit(this.refs.usernameInput.value);
  }

  renderError(message) {
    return <div className="UsernameInput-error">{message}</div>;
  }

  render() {
    return (
      <div className="UsernameInput">
        <form onSubmit={this.submitUsername.bind(this)}>
          <label className="UsernameInput-username-label" htmlFor="username">GitHub Username:</label>
          <input id="username" ref="usernameInput" className="UsernameInput-search-box" type="text" placeholder="List repositories..." />
        </form>
        {this.props.error ? this.renderError(this.props.error) : null}
      </div>
    );
  }
}

export default UsernameInput;
