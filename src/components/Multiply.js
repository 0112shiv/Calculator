import React from 'react';

const Multiply = ({ onButtonClick }) => (
  <button onClick={() => onButtonClick('*')}>*</button>
);

export default Multiply;
