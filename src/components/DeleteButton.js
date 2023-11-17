// src/components/DeleteButton.js
import React from 'react';

const DeleteButton = ({ onButtonClick }) => (
  <button onClick={() => onButtonClick('backspace')}>Delete</button>
);

export default DeleteButton;
