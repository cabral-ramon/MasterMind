import React from "react";
import PropTypes from "prop-types";

const Feedback = ({ feedback }) => (
  <div className="playBoxContainer">
    {feedback.map((match, index) => {
      return match ? (
        <div key={index}>Correct</div>
      ) : (
        <div key={index}>False</div>
      );
    })}
  </div>
);

Feedback.propTypes = {
  feedback: PropTypes.array.isRequired
};

export default Feedback;
