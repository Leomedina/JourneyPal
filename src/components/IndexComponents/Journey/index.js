import React, { useState } from 'react';
import JourneyForm from '../JourneyForm';
import TripIcons from '../TripIcons'

function Journey() {
  const INITIAL_STATE = {
    "trip": true,
    "location": false,
    "food": false,
    "drink": false
  }
  const [tripState, setTripState] = useState(INITIAL_STATE);

  return (
    <>
      <TripIcons tripState={tripState} />
      <JourneyForm />
    </>
  )
};


export default Journey;