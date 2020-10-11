import React from 'react';
import './card.styles.css';
export const Card = ({ url, name }) => {
  return (
    <div className="card1">
      <img src={url} alt={name} />
    </div>
  );
};
