import React from 'react';
import './UsernameInput.css';

const UsernameInput = () => (
  <form className="UsernameInput">
    <label className="UsernameInput-username-label" htmlFor="username">GitHub Username:</label>
    <input id="username" className="UsernameInput-search-box" type="text" placeholder="Search..." />
  </form>
);

export default UsernameInput;
