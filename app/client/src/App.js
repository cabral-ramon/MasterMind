import React, { Component } from "react";
import Router from "./router";
import TopScores from "./components/Scores/TopScores";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          <a href="/">MasterMind</a>
        </h1>
        <TopScores />
        <Router />
      </div>
    );
  }
}

export default App;
