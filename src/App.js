import React, { Component } from 'react';
import logo from './Octocat.png';
import './App.css';
import UsernameInputContainer from './components/UsernameInputContainer';
import RepositoryListContainer from './components/RepositoryListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>List GitHub Repositories</h2>
        </div>
        <div className="App-content">
          <UsernameInputContainer />
          <RepositoryListContainer />
        </div>
      </div>
    );
  }
}

export default App;
