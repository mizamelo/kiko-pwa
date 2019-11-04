import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// Pages
import Login from '../page/Login';
import Register from '../page/Register';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
