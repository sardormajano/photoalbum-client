import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './shared/components';
import { Gallery, ImageUpload, SignUp, SignOut, SignIn } from './pages';
import { ROUTES } from './shared/constants';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTES.GALLERY}>
          <Gallery />
        </Route>
        <Route path={ROUTES.IMAGE_UPLOAD}>
          <ImageUpload />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_OUT}>
          <SignOut />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
