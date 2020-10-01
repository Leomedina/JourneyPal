import React from 'react';
import StartForm from './Start';
import LocationForm from './Location';
import FoodForm from './Food';
import DrinkForm from './Drink';
import AttractionForm from './Attraction';

function JourneyForm({ tripState, setTripState }) {
  const { trip, location, attraction, food, drink } = tripState;

  return (
    <div className="form">
      {trip ? <StartForm setTripState={setTripState} /> : ""}
      {location ? <LocationForm setTripState={setTripState} /> : ""}
      {attraction ? <AttractionForm setTripState={setTripState} /> : ""}
      {food ? <FoodForm setTripState={setTripState} /> : ""}
      {drink ? <DrinkForm setTripState={setTripState} /> : ""}
    </div>
  )
};

export default JourneyForm;