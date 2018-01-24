import React from 'react';
import { Switch, Route } from 'react-router';

import LandingPage from './containers/LandingPage'
import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    {/* <Route exact path="/" component={LoginPage} /> */}
    <Route exact path="/loggedin" component={LoggedInPage} />
  </Switch>
);
