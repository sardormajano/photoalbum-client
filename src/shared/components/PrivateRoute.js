import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services/auth.service';
import { ROUTES } from '../constants';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthorized() ? (
        <Component {...props} />
      ) : (
        <Redirect to={ROUTES.SIGN_IN} />
      )
    }
  />
);
