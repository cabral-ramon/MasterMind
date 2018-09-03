import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameBoard from "./components/GameBoard/GameBoard";
import TopScores from "./components/Scores/TopScores";
import StartButton from "./components/Buttons/StartButton";
import Instructions from "./components/Feedback/Instructions";
import Scores from "./components/Scores/Scores";

const Router = function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Instructions />
              <StartButton text="start" />
              <TopScores />
            </Fragment>
          )}
        />
        <Route exact path="/game" component={() => <GameBoard />} />
        <Route exact path="/scores" component={() => <Scores />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
