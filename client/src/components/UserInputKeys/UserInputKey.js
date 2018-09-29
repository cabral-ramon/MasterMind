import React from "react";
import PropTypes from "prop-types";

const UserInputKey = ({ num, handleDrag, index, disabled }) => {
  if (disabled) {
    return (
      <div style={{ opacity: 0.25 }} className="inputItem">
        {num}
      </div>
    );
  } else {
    return (
      <div
        draggable
        onDragStart={e => {
          e.dataTransfer.setData("text/plain", "anything"); //firefox fix
        }}
        onDrag={e => handleDrag(e, num, index)}
        className="inputItem"
        onTouchStart={e => handleDrag(e, num, index)}
      >
        {num}
      </div>
    );
  }
};

UserInputKey.propTypes = {
  num: PropTypes.number.isRequired,
  handleDrag: PropTypes.func,
  disabled: PropTypes.bool,
  index: PropTypes.number
};

export default UserInputKey;
