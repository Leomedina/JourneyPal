import React, { useReducer } from 'react';
import rootReducer from './context/rootReducer';
import DispatchContext from './context/dispatchContext';
import TripContext from './context/tripContext';
import Routes from './Routes';


function App() {
  const [state, dispatch] = useReducer(rootReducer, {
    "form": {
      "location": "",
      "attraction": "",
      "food": "",
      "drink": ""
    },
    "trip": {
      "id": "",
      "user_id": "",
      "location": "",
      "hero_venue": "",
      "food_venue": "",
      "last_venue": ""
    }
  });

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <TripContext.Provider value={state}>
          <Routes />
        </TripContext.Provider>
      </DispatchContext.Provider>
    </>
  );
};

export default App;