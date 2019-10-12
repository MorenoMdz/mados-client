/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/app" component={Main} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}

// TODO 404
