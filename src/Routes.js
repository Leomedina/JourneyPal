import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import Trip from './pages/Trip';
import Map from './pages/Map';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/map"><Map /></Route>
        <Route exact path="/trip"><Trip /></Route>
        <Route exact path="/"><Index /></Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;