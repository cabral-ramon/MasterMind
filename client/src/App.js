import React, { Component } from "react";
import Router from "./router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark mb-5">
          <a className="navbar-brand" href="/">
            MasterMind
          </a>
        </nav>
        <Router />
      </div>
    );
  }
}

export default App;
