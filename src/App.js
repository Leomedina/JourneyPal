import React, { useReducer } from 'react';
import rootReducer from './reducers/rootReducer';
import DispatchContext from "./reducers/dispatchContext";
import TripContext from './reducers/tripContext';
import Index from './pages/Index';

function App() {
  const [state, dispatch] = useReducer(rootReducer, {
    "location": "",
    "attraction": "",
    "food": "",
    "drink": ""
  });

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <TripContext.Provider value={state}>
          <Index />
        </TripContext.Provider>
      </DispatchContext.Provider>
    </>
  );
};

export default App;