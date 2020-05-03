import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import List from './List';

const Whisper = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.WHISPER.LIST.route}
        component={List}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Whisper;
