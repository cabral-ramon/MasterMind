import React, { Component } from "react";
import Router from "./router";
import "./App.css";

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
          <a target="_blank" rel="noopener noreferrer" href="http://ramoncabral.com">
            <small>By Ramon Cabral</small>
          </a>
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Portfolio</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
