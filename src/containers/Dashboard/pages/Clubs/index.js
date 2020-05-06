import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import ClubsMap from './ClubsMap';
import List from './List';

const Clubs = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.CLUBS.MAP.route}
        component={ClubsMap}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.CLUBS.MY.route}
        component={List}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Clubs;
