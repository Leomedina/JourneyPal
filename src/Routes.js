import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import Trip from './pages/Trip';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/trip"><Trip /></Route>
        <Route exact path="/"><Index /></Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;