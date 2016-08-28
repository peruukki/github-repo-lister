import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsernameInput from './components/UsernameInput';
import RepositoryList from './components/RepositoryList';

const mockRepositories = require('./mock-data.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>List GitHub Repositories</h2>
        </div>
        <div className="App-content">
          <UsernameInput />
          <RepositoryList repositories={mockRepositories} />
        </div>
      </div>
    );
  }
}

export default App;
