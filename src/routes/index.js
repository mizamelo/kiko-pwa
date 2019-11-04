import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// Pages
import Login from '../page/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
