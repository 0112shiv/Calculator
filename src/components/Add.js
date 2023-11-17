import React from 'react';

const Add = ({ onButtonClick }) => (
  <button onClick={() => onButtonClick('+')}>+</button>
);

export default Add;
