import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainPage } from 'pages/main';


export const Routes = () => (
  <Switch>
    <Route path={'/'} exact component={MainPage}/>
  </Switch>
);