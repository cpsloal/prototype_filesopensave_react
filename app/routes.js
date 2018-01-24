import React from 'react';
import { Switch, Route } from 'react-router';

import LandingPage from './containers/LandingPage'
import FileOpenPage from './containers/FileOpenPage';
import FileSavePage from './containers/FileSavePage';
import FileOpenSavePage from './containers/FileOpenSavePage';

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/file-open" component={FileOpenPage} />
    <Route exact path="/file-save" component={FileSavePage} />
    <Route exact path="/file-open-save" component={FileOpenSavePage} />    
  </Switch>
);
