import React from 'react';
import { formStartedState } from '../../../../utilities/formStatesUtils';
import './index.css';

function StartForm({ setTripState }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    setTripState(formStartedState);
  };

  return (
    <form onSubmit={handleSubmit} className="start-form">
      <button className="form-button">start</button>
      <p><img
        src="https://i.imgur.com/mHbnk9J.png"
        className="emoji"
        alt="plane emoji"
      /></p>
    </form >
  )
};

export default StartForm;