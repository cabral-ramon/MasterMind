import React from "react";
import UserInputKey from "../UserInputKeys/UserInputKey";
import PropTypes from "prop-types";

import "./PlayBox.css";

const PlayBox = ({ userInput, handleDragOver, handleDrag, handleDrop }) => (
  <div className="playBoxContainer">
    {userInput.map((box, idx) => (
      <div
        key={idx}
        onDragOver={e => handleDragOver(e, idx)}
        className="playBox"
        onDrop={handleDrop}
      >
        {box === null ? (
          ""
        ) : (
          <UserInputKey handleDrag={handleDrag} num={box} index={idx} />
        )}
      </div>
    ))}
  </div>
);

PlayBox.propTypes = {
  userInput: PropTypes.array.isRequired,
  handleDragOver: PropTypes.func.isRequired
};

export default PlayBox;
