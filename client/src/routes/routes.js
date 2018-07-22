import React from 'react';
import { Route, Switch } from 'react-router';

// Module root components
import User from '../features/user';
import PageNotFound from '../common/components/PageNotFound';

export default (
  <Switch>
    {/*<Route exact path="/" component={Home}/>*/}

    <Route exact path="/user" component={User}/>
    <Route path="*" component={PageNotFound} />
  </Switch>
);
