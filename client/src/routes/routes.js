import React from 'react';
import { Route, Switch } from 'react-router';

// Module root components
import Home from '../features/home';
import PageNotFound from '../common/components/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="*" component={PageNotFound} />
  </Switch>
);
