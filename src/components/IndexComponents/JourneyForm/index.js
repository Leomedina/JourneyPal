import React from 'react';
import StartForm from './Start';
import LocationForm from './Location';
import FoodForm from './Food';
import DrinkForm from './Drink';

function JourneyForm() {

  return (
    <div className="form">
      <StartForm />
      <LocationForm />
      <FoodForm />
      <DrinkForm />
    </div>
  )
};

export default JourneyForm;