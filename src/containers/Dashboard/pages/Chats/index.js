import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import List from './List';

const Chats = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.CHATS.LIST.route}
        component={List}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.CHATS.GROUPS.route}
        component={List}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.CHATS.CONVERSATIONS.route}
        component={List}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Chats;
