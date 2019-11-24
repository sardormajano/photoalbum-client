import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar, PrivateRoute, PublicRoute } from './shared/components';
import { Images, SignUp, SignOut, SignIn } from './pages';
import { ImageUpload } from './pages/image-upload';
import { ROUTES } from './shared/constants';

import 'materialize-css/dist/css/materialize.min.css';
import 'toastr/build/toastr.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='section'>
        <Switch>
          <PrivateRoute path={ROUTES.IMAGE_UPLOAD} component={ImageUpload} />
          <PrivateRoute path={ROUTES.IMAGES} component={Images} />
          <PublicRoute path={ROUTES.SIGN_IN} component={SignIn} />
          <PrivateRoute path={ROUTES.SIGN_OUT} component={SignOut} />
          <PublicRoute path={ROUTES.SIGN_UP} component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
