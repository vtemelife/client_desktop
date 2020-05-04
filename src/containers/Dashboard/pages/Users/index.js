import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import Search from './Search';
import Friends from './Friends';
import RequestsFromMe from './RequestsFromMe';
import RequestsFromUsers from './RequestsFromUsers';

const Users = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.USERS.FRIENDS.route}
        component={Friends}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.USERS.SEARCH.route}
        component={Search}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.USERS.REQUESTS_FROM_ME.route}
        component={RequestsFromMe}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.USERS.REQUESTS_FROM_USERS.route}
        component={RequestsFromUsers}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Users;
