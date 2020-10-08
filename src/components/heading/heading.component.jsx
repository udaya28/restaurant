import React from 'react';
import './heading.styles.css';
export const Heading = ({first,second,styles}) => {
  return (
    <div id="head" style={styles}>
      <h1>{first}</h1>
      <h1>{second}</h1>
    </div>
  );
};
