import React from 'react';
import './Button.scss';

const Button = ({ onClick, persons, active }) => {
  return (
    <div>
      <button className={`button-hover ${(active && 'button-active') || ''}`} onClick={onClick}>
        <h4 className="hike">{persons.name}</h4> 
        <p className="pill">{persons.item}</p>
      </button>
    </div>
  );
};

export default Button;
