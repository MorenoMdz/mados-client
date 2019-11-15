/* eslint-disable react/prop-types */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Reports from './pages/Reports';
import Admin from './pages/Admin';
import Config from './pages/Config';
import User from './pages/User';
import Login from './pages/Login';
import Dev from './pages/Dev';

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
      <Route path="/dev" exact component={Dev} />
      <PrivateRoute path="/app" component={Main} />
      <PrivateRoute path="/reports" component={Reports} />
      <PrivateRoute path="/admin" component={Admin} />
      <PrivateRoute path="/config" component={Config} />
      <PrivateRoute path="/user" component={User} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}

// TODO 404
