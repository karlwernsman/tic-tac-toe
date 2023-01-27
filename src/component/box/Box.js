import React from 'react';
import { handleBoxClick } from '../../context/GameContext.js';
import './Box.css';

export default function Box({ box }) {
  return (
    <div className="box" onClick={handleBoxClick}>
      {box}
    </div>
  );
}
