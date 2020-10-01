import React from 'react';

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
    <form
      onSubmit={handleSubmit}
    >
      <button className="form-button">start</button>
    </form >
  )
};

export default StartForm;