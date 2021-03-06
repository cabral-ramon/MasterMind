import React from "react";
import PropTypes from "prop-types";

const Button = ({ action, text, className }) => (
  <button className={className} onClick={action}>
    {text}
  </button>
);

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default Button;
