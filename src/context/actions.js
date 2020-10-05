import {
  ADD_LOCATION, ADD_ATTRACTION, ADD_FOOD,
  ADD_DRINK, COMPLETE_FORM, ADD_HERO_LOCATION,
  ADD_TRIP_LOCATION, ADD_FOOD_VENUE
} from "./actionTypes";

function addLocation(location) {
  return {
    type: ADD_LOCATION,
    "location": location
  };
};

function addAttraction(attraction) {
  return {
    type: ADD_ATTRACTION,
    "attraction": attraction
  };
};

function addFood(food) {
  return {
    type: ADD_FOOD,
    "food": food
  };
};

function addDrink(drink) {
  return {
    type: ADD_DRINK,
    "drink": drink
  };
};

function completeForm(state) {
  return {
    type: COMPLETE_FORM,
    state
  };
};

export { addLocation, addAttraction, addFood, addDrink, completeForm };