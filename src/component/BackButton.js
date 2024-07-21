import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ ButtonName, className = '' }) => {
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={`back-button ${className}`}>
       {ButtonName}
    </button>
  );
};

export default BackButton;