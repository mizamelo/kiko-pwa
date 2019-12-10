import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import PrivateRoute from './private';
// Pages
// import Initial from '../page/Initial';
import Login from '../page/Login';
import Register from '../page/Register';
import Recover from '../page/Recover';
import Home from '../page/Home';
import Courses from '../page/Courses';
import Details from '../page/Details';
import Profile from '../page/Profile';
// import Loading from '../page/Loading';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Initial} /> */}
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/index.html" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/recover" component={Recover} />
        <PrivateRoute path="/courses" component={Courses} />
        <PrivateRoute path="/:id/course" component={Details} />
        <PrivateRoute path="/profile" component={Profile} />
        <Redirect path="/*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
