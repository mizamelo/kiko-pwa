import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// Pages
import Initial from '../page/Initial';
import Login from '../page/Login';
import Register from '../page/Register';
import Recover from '../page/Recover';
import Home from '../page/Home';
import Courses from '../page/Courses';
import Details from '../page/Details';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Initial} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/recover" component={Recover} />
        <Route path="/home" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/:id/course" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
