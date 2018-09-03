import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const StartButton = props => {
  const startGame = () => {
    props.history.push("/game");
  };
  return <button onClick={startGame}>{props.text}</button>;
};

StartButton.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default withRouter(StartButton);
