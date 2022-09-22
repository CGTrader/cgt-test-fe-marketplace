import React from 'react';
import './css/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='cart'>
      <button className='btn'>Cart</button>
    </Link>
  );
}