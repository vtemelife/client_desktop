import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import List from './List';
import Folders from './Folders';

const MediaGallery = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.MEDIA.LIST.route}
        component={List}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.MEDIA.DETAIL.route}
        component={List}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.MEDIA.FOLDERS.route}
        component={Folders}
      />
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.MEDIA.FOLDER_DETAIL.route}
        component={List}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default MediaGallery;
