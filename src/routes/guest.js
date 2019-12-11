import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!localStorage.getItem('@kiko-token') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

export default GuestRoute;