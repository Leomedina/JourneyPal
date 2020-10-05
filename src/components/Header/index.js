import React from 'react';
import './index.css';

function Header({ message = "start here, go anywhere" }) {
  return (
    <div className="header">
      <h1>{message}</h1>
    </div>
  );
};

export default Header;