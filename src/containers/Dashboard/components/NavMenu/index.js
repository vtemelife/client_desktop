import React from 'react';
import { Menu, Badge } from 'antd';
import {
  UserOutlined,
  ProfileOutlined,
  TeamOutlined,
  MessageOutlined,
  CalendarOutlined,
  CoffeeOutlined,
  SettingOutlined,
  PictureOutlined,
} from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import { _ } from 'utils/trans';

import styles from './index.module.scss';

const NavMenu = () => {
  const location = useLocation();

  return (
    <Menu
      className={styles.Menu}
      mode="vertical"
      activeKey={location.pathname}
      selectedKeys={location.pathname}
    >
      <Menu.Item
        key={CLIENT_URLS.DASHBOARD.PROFILE.INDEX.buildPath({
          userSlug: 'slug',
        })}
      >
        <UserOutlined />
        <NavLink
          to={CLIENT_URLS.DASHBOARD.PROFILE.INDEX.buildPath({
            userSlug: 'slug',
          })}
        >
          {_('My Profile')}
        </NavLink>
      </Menu.Item>
      <Menu.Item key={CLIENT_URLS.DASHBOARD.ACTIONS.INDEX.route}>
        <ProfileOutlined />
        <NavLink to={CLIENT_URLS.DASHBOARD.ACTIONS.INDEX.buildPath()}>
          {_('Actions')} <Badge count={25} />
        </NavLink>
      </Menu.Item>
      <Menu.Item key={CLIENT_URLS.DASHBOARD.CHATS.INDEX.route}>
        <MessageOutlined />
        <NavLink to={CLIENT_URLS.DASHBOARD.CHATS.LIST.buildPath()}>
          {_('Chats')} <Badge count={25} />
        </NavLink>
      </Menu.Item>
      <Menu.Item key={CLIENT_URLS.DASHBOARD.USERS.FRIENDS.buildPath()}>
        <TeamOutlined />
        <NavLink to={CLIENT_URLS.DASHBOARD.USERS.FRIENDS.buildPath()}>
          {_('Friends')} <Badge count={25} />
        </NavLink>
      </Menu.Item>
      <Menu.Item key={CLIENT_URLS.DASHBOARD.EVENTS.INDEX.route}>
        <CalendarOutlined />
        <NavLink to={CLIENT_URLS.DASHBOARD.EVENTS.INDEX.buildPath()}>
          {_('Events')} <Badge count={25} />
        </NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key={CLIENT_URLS.DASHBOARD.BLOGS.USER.buildPath({
          userSlug: 'slug',
        })}
      >
        <CoffeeOutlined />
        <NavLink
          to={CLIENT_URLS.DASHBOARD.BLOGS.USER.buildPath({
            userSlug: 'slug',
          })}
        >
          {_('My blog')}
        </NavLink>
      </Menu.Item>
      <Menu.Item key={CLIENT_URLS.DASHBOARD.MEDIA.FOLDERS.buildPath()}>
        <PictureOutlined />
        <NavLink to={CLIENT_URLS.DASHBOARD.MEDIA.FOLDERS.buildPath()}>
          {_('My media')}
        </NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={CLIENT_URLS.DASHBOARD.SETTINGS.INDEX.route}>
        <SettingOutlined />
        <NavLink to={CLIENT_URLS.DASHBOARD.SETTINGS.INDEX.buildPath()}>
          {_('Settings')}
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
