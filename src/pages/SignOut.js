import React from 'react';
import { Redirect } from 'react-router-dom';
import { authService } from '../shared/services';
import { ROUTES } from '../shared/constants';

export function SignOut() {
  authService.signOut();
  return <Redirect to={ROUTES.SIGN_IN} />;
}
