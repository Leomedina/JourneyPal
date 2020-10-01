import * as t from './actionTypes';

function rootReducer(state, action) {
  switch (action.type) {
    case t.ADD_LOCATION:
      return {
        ...state,
        location: action.location
      };
    case t.ADD_ATTRACTION:
      return {
        ...state,
        attraction: action.attraction
      };
    case t.ADD_FOOD:
      return {
        ...state,
        food: action.food
      };
    case t.ADD_DRINK:
      return {
        ...state,
        drink: action.drink
      };
    default:
      return state;
  };
};

export default rootReducer;