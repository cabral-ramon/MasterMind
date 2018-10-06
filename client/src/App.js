import React, { Component } from 'react';
import Router from './router';
import './App.css';

// test

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="/">
            MasterMind
          </a>
        </nav>
        <Router />
        <footer>
          <small>By Ramon Cabral</small>
          <ul>
            <li>
              <a
                className="profile-links"
                href="https://github.com/cabral-ramon"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="profile-links"
                href="https://www.linkedin.com/in/cabral-ramon/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a className="profile-links" href="http://ramoncabral.com/">
                Portfolio
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
