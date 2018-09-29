import React from "react";
import UserInputKey from "../UserInputKeys/UserInputKey";
import PropTypes from "prop-types";

import "./PlayBox.css";

const PlayBox = ({ userInput, handleDragOver, handleDrag, handleDrop }) => (
  <div className="row mx-auto playBox-wrapper">
    {userInput.map((box, idx) => (
      <div
        key={idx}
        onDragOver={e => handleDragOver(e, idx)}
        className="playBox"
        onDrop={handleDrop}
        onTouchStart={e => handleDrop(e, idx)}
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
