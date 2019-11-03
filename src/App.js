import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar, PrivateRoute, PublicRoute } from './shared/components';
import { Gallery, SignUp, SignOut, SignIn } from './pages';
import { ImageUpload } from './pages/image-upload';
import { ROUTES } from './shared/constants';

import 'materialize-css/dist/css/materialize.min.css';
import 'toastr/build/toastr.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute path={ROUTES.GALLERY} component={Gallery} />
        <PrivateRoute path={ROUTES.IMAGE_UPLOAD} component={ImageUpload} />
        <PublicRoute path={ROUTES.SIGN_IN} component={SignIn} />
        <PrivateRoute path={ROUTES.SIGN_OUT} component={SignOut} />
        <PublicRoute path={ROUTES.SIGN_UP} component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
