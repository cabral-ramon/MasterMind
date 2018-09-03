import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameBoard from "./components/GameBoard/GameBoard";
import StartButton from "./components/Buttons/StartButton";

const Router = function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <StartButton text="start" />} />
        <Route exact path="/game" component={() => <GameBoard />} />
        <Route
          exact
          path="/gameOver"
          render={() => (
            <div>
              <h1>Game Over</h1>
              <button>Play again</button>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
