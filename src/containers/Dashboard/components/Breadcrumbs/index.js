import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import CLIENT_URLS from 'routes/client';

import { _ } from 'utils/trans';

import styles from './index.module.scss';

const Breadcrumbs = () => (
  <Switch>
    <Route
      exact
      path={CLIENT_URLS.DASHBOARD.BLOGS.USER.route}
      render={() => (
        <Breadcrumb className={styles.Breadcrumb}>
          <Breadcrumb.Item>
            <Link to={CLIENT_URLS.DASHBOARD.BLOGS.LIST.buildPath()}>
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
      exact
      path={CLIENT_URLS.DASHBOARD.MEDIA.FOLDERS.route}
      render={() => (
        <Breadcrumb className={styles.Breadcrumb}>
          <Breadcrumb.Item>
            <Link to={CLIENT_URLS.DASHBOARD.MEDIA.LIST.buildPath()}>
              {_('Media Gallery')}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{_('Media Folders')}</Breadcrumb.Item>
        </Breadcrumb>
      )}
    />
    <Route
      exact
      path={CLIENT_URLS.DASHBOARD.MEDIA.FOLDER_DETAIL.route}
      render={() => (
        <Breadcrumb className={styles.Breadcrumb}>
          <Breadcrumb.Item>
            <Link to={CLIENT_URLS.DASHBOARD.MEDIA.LIST.buildPath()}>
              {_('Media Gallery')}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={CLIENT_URLS.DASHBOARD.MEDIA.FOLDERS.buildPath()}>
              {_('Media Folders')}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{_('Folder')}</Breadcrumb.Item>
        </Breadcrumb>
      )}
    />
  </Switch>
);

export default Breadcrumbs;
