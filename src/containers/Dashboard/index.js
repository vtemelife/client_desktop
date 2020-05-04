import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Breadcrumbs from './components/Breadcrumbs';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Chats from './pages/Chats';
import Events from './pages/Events';
import MediaGallery from './pages/MediaGallery';
import Themapedia from './pages/Themapedia';
import Blogs from './pages/Blogs';
import Whisper from './pages/Whisper';

import styles from './index.module.scss';

const { Content, Sider } = Layout;

const Dashboard = () => (
  <Layout>
    <Header />
    <Layout>
      <Sider className={styles.Sider}>
        <NavMenu />
      </Sider>
      <Layout className={styles.Layout}>
        <Breadcrumbs />
        <Content className={styles.Content}>
          <Switch>
            <Route
              path={CLIENT_URLS.DASHBOARD.PROFILE.INDEX.route}
              component={Profile}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.NEWS.INDEX.route}
              component={Activity}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.CHATS.INDEX.route}
              component={Chats}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.USERS.INDEX.route}
              component={Users}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.EVENTS.INDEX.route}
              component={Events}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.WHISPER.INDEX.route}
              component={Whisper}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.BLOGS.INDEX.route}
              component={Blogs}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.THEMAPEDIA.INDEX.route}
              component={Themapedia}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.MEDIA.INDEX.route}
              component={MediaGallery}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.NOTIFICATIONS.INDEX.route}
              component={Activity}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.CLUBS.INDEX.route}
              component={Activity}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.ADMINISTRATION.INDEX.route}
              component={Activity}
            />
            <Route
              path={CLIENT_URLS.DASHBOARD.SETTINGS.INDEX.route}
              component={Activity}
            />
            <NotFoundRoute />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Dashboard;
