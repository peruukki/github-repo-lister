import React, { Component } from 'react';
import './UsernameInput.css';

class UsernameInput extends Component {
  static propTypes = {
    onUsernameSubmit: React.PropTypes.func.isRequired
  };

  submitUsername(e) {
    e.preventDefault();
    this.props.onUsernameSubmit(this.refs.usernameInput.value);
  }

  render() {
    return (
      <form className="UsernameInput" onSubmit={this.submitUsername.bind(this)}>
        <label className="UsernameInput-username-label" htmlFor="username">GitHub Username:</label>
        <input id="username" ref="usernameInput" className="UsernameInput-search-box" type="text" placeholder="List repositories..." />
      </form>
    );
  }
}

export default UsernameInput;
