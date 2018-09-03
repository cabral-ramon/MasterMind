import React from "react";
import PropTypes from "prop-types";
import "./Feedback.css";

const Feedback = ({ feedback }) => (
  <div className="playBoxContainer">
    {feedback.map((match, index) => {
      if (match === 3) {
        return (
          <div className="feedback-item" key={index}>
            <i className="fas fa-check" style={{ color: "green" }} />
          </div>
        );
      } else if (match === 2) {
        return (
          <div className="feedback-item" key={index}>
            <i className="far fa-circle" style={{ color: "blue" }} />
          </div>
        );
      } else {
        return (
          <div className="feedback-item" key={index}>
            <i className="fas fa-times" style={{ color: "red" }} />
          </div>
        );
      }
    })}
  </div>
);

Feedback.propTypes = {
  feedback: PropTypes.array.isRequired
};

export default Feedback;
