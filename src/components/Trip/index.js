import React from 'react';
import TripIcons from '../TripIcons';
import './index.css';

function Trip() {
  const TRIP_STATE = {
    "trip": false,
    "location": false,
    "attraction": false,
    "food": false,
    "drink": false,
  }
  return (
    <div className="trip-icons">
      <TripIcons tripState={TRIP_STATE} />
      <div class="trip">
        <h1>check out --- </h1>
        <h1>then why not grad some grub at ---- </h1>
        <h1> and if you want check out ----</h1>
      </div>
    </div >
  );
};

export default Trip;