import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import List from './List';

const Users = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.USERS.FRIENDS.route}
        component={List}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.USERS.SEARCH.route}
        component={List}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Users;
