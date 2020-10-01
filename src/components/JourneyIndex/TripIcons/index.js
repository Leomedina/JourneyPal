import React from 'react';
import './index.css';

function TripIcons({ tripState }) {
  const { trip, location, attraction, food, drink } = tripState;

  return (
    <div className="form-state">
      <img
        src="https://i.imgur.com/QJMKdO6.png"
        className={`emoji ${trip ? 'active' : ''}`}
        alt=""
      />
      <img
        src="https://i.imgur.com/pNQs7sd.png"
        className={`emoji ${location ? 'active' : ''}`}
        alt=""
      />
      <img
        src="https://i.imgur.com/mYEGFEF.png"
        className={`emoji ${attraction ? 'active' : ''} attraction`}
        alt=""
      />
      <img
        src="https://i.imgur.com/gTi9anp.png"
        className={`emoji ${food ? 'active' : ''}`}
        alt=""
      />
      <img
        src="https://i.imgur.com/Cv9oISF.png"
        className={`emoji ${drink ? 'active' : ''} drink`}
        alt="" />
    </div>
  );
};

export default TripIcons;