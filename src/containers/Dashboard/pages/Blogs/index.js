import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import List from './List';

const Blogs = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.BLOGS.LIST.route}
        component={List}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.BLOGS.USER.route}
        component={List}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Blogs;
