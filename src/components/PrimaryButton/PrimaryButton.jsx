import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryButton = ({ className, text = "Log In", divClassName }) => {
  return (
    <div className={`primary-button ${className}`}>
      <div className={`log-in ${divClassName}`}>{text}</div>
    </div>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
};
