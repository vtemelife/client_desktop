import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import ActionsTimeline from './ActionsTimeline';

const Actions = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.ACTIONS.INDEX.route}
        component={ActionsTimeline}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Actions;
