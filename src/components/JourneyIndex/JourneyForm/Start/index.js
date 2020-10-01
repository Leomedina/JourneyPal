import React from 'react';
import './index.css';

function StartForm({ setTripState }) {
  const formStartedState = {
    "trip": false,
    "location": true,
    "food": false,
    "drink": false,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formStartedState);
  };

  return (
    <form onSubmit={handleSubmit} className="start-form">
      <button className="form-button">start</button>
      <p>
        <img
          src="https://i.imgur.com/mHbnk9J.png"
          className="emoji"
        />
      </p>
    </form >
  )
};

export default StartForm;