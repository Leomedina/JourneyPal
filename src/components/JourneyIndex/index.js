import React, { useState } from 'react';
import JourneyForm from './JourneyForm';
import TripIcons from './TripIcons'
import './index.css';

function JourneyIndex() {
  const INITIAL_STATE = {
    "trip": true,
    "location": false,
    "attraction": false,
    "food": false,
    "drink": false,
  }
  const [tripState, setTripState] = useState(INITIAL_STATE);

  return (
    <>
      <TripIcons tripState={tripState} />
      <JourneyForm tripState={tripState} setTripState={setTripState} />
    </>
  )
};


export default JourneyIndex;