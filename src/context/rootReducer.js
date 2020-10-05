import * as t from './actionTypes';

function rootReducer(state, action) {
  switch (action.type) {
    case t.ADD_LOCATION:
      return {
        ...state,
        form: {
          ...state.form,
          location: action.location
        }
      };
    case t.ADD_ATTRACTION:
      return {
        ...state,
        form: {
          ...state.form,
          attraction: action.attraction
        }
      };
    case t.ADD_FOOD:
      return {
        ...state,
        form: {
          ...state.form,
          food: action.food
        }
      };
    case t.ADD_DRINK:
      return {
        ...state,
        form: {
          ...state.form,
          drink: action.drink
        }
      };

    case t.ADD_HERO_LOCATION:
      return {
        ...state,
        trip: {
          ...state.trip,
          hero_venue: action.venue
        }
      };
    case t.ADD_FOOD_VENUE:
      return {
        ...state,
        trip: {
          ...state.trip,
          food_venue: action.food
        }
      };
    case t.ADD_LAST_VENUE:
      return {
        ...state,
        trip: {
          ...state.trip,
          last_venue: action.venue
        }
      };
    case t.ADD_TRIP_LOCATION:
      return {
        ...state,
        trip: {
          ...state.trip,
          location: action.location
        }
      };
    default:
      return state;
  };
};

export default rootReducer;