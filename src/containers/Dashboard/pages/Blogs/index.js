import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import List from './List';
import PostDetail from './PostDetail';
import PostCreateUpdate from './PostCreateUpdate';

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
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.BLOGS.POST_DETAIL.route}
        component={PostDetail}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.BLOGS.POST_CREATE.route}
        component={PostCreateUpdate}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.BLOGS.POST_UPDATE.route}
        component={PostCreateUpdate}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Blogs;
