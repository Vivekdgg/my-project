import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ onClick, text, className = '', disabled = false }) => {

  return (
    <button className={`custom-btn ${className}`} onClick={onClick} disabled={disabled}>
    {text}
  </button>
  )
}

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default CustomButton;