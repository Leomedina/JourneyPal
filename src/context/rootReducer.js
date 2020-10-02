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
    default:
      return state;
  };
};

export default rootReducer;