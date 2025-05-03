import React from 'react';
import { Link } from 'react-router-dom';
import './CTAButton.css';

const CTAButton = ({ text, link, type = 'primary', isExternal = false, onClick }) => {
  const buttonClass = `cta-button ${type === 'primary' ? 'primary' : 'secondary'}`;
  
  if (isExternal) {
    return (
      <a 
        href={link} 
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {text}
      </a>
    );
  }
  
  if (onClick) {
    return (
      <button 
        className={buttonClass} 
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  
  return (
    <Link 
      to={link} 
      className={buttonClass}
    >
      {text}
    </Link>
  );
};

export default CTAButton;