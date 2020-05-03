import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import CLIENT_URLS from 'routes/client';

import { _ } from 'utils/trans';

import styles from './index.module.scss';

const Breadcrumbs = () => (
  <Switch>
    <Route
      path={CLIENT_URLS.DASHBOARD.PROFILE.INDEX.route}
      render={() => (
        <Breadcrumb className={styles.Breadcrumb}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
      )}
    />
    <Route
      path={CLIENT_URLS.DASHBOARD.BLOGS.USER.route}
      render={() => (
        <Breadcrumb className={styles.Breadcrumb}>
          <Breadcrumb.Item>
            <Link to={CLIENT_URLS.DASHBOARD.BLOGS.INDEX.buildPath()}>
              {_('Blogs')}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {_('Blogger')}:{' '}
            <Link
              to={CLIENT_URLS.DASHBOARD.PROFILE.INDEX.buildPath({
                userSlug: 'slug',
              })}
            >
              test
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      )}
    />
    <Route
      path={CLIENT_URLS.DASHBOARD.MEDIA.USER.route}
      render={() => (
        <Breadcrumb className={styles.Breadcrumb}>
          <Breadcrumb.Item>
            <Link to={CLIENT_URLS.DASHBOARD.MEDIA.INDEX.buildPath()}>
              {_('Media Gallery')}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {_('Author')}:{' '}
            <Link
              to={CLIENT_URLS.DASHBOARD.PROFILE.INDEX.buildPath({
                userSlug: 'slug',
              })}
            >
              test
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      )}
    />
  </Switch>
);

export default Breadcrumbs;
