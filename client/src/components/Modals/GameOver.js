import React from "react";
import PropTypes from "prop-types";
import TopScores from "../Scores/TopScores";
import "./modal.css";

const GameOver = ({ won, player, score, code }) => {
  let modalContent;
  if (won) {
    modalContent = (
      <div className="modal-main container text-center p-3">
        <h1>
          Congrats <span>{player}</span>
        </h1>
        <p>You solved the code, you are a real mastermind!</p>
        <p>{code.join("")}</p>
        <p>
          Your score was: <span>{score}</span>
        </p>
        <a href="/game" className="btn btn-link">
          New Game
        </a>
        <a href="/" className="btn btn-link">
          Home
        </a>
        <TopScores />
      </div>
    );
  } else {
    modalContent = (
      <div className="modal-main container text-center p-3">
        <h1>
          Sorry...
          <span>{player}</span>
        </h1>
        <p>You were not able to crack the code.</p>
        <p>the code was {code.join("")}</p>
        <a href="/game" className="btn btn-link">
          Try again?
        </a>
        <a href="/" className="btn btn-link">
          Home
        </a>
      </div>
    );
  }

  return <div className="modal-container">{modalContent}</div>;
};

GameOver.propTypes = {
  won: PropTypes.bool.isRequired,
  player: PropTypes.string.isRequired,
  code: PropTypes.array.isRequired,
  score: PropTypes.number
};

export default GameOver;
