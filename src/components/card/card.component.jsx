import React from 'react';
import './card.styles.css';
export const Card = ({ url, name }) => {
  return (
    <div className="card1 shadow-sm">
      <img src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
};
