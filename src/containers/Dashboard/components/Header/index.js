import React, { useContext } from 'react';
import { useHistory, NavLink, useLocation } from 'react-router-dom';
import { Layout, Menu, Badge, Switch } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  CoffeeOutlined,
  InstagramOutlined,
  SearchOutlined,
  EnvironmentOutlined,
  BellOutlined,
  EyeInvisibleOutlined,
  UsergroupAddOutlined,
  ControlFilled,
  AuditOutlined,
} from '@ant-design/icons';
import { useMutate } from 'restful-react';

import CLIENT_URLS from 'routes/client';
import SERVER_URLS from 'routes/server';

import imgLogoWhite from 'styles/img/logoWhite.png';
import styles from './index.module.scss';
import { _ } from 'utils/trans';

import { AuthUserContext } from 'containers/ContextProviders/AuthUserService';
import { ThemeContext } from 'containers/ContextProviders/ThemeService';

const { SubMenu } = Menu;

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const authUserContext = useContext(AuthUserContext);
  const themeContext = useContext(ThemeContext);
  const authUser = authUserContext.authUser.data || {};

  const { mutate: signOut } = useMutate({
    verb: 'POST',
    path: SERVER_URLS.SIGN_OUT.buildPath(),
  });
  return (
    <Layout.Header className={styles.Header}>
      <div className={styles.Brand}>
        <img src={imgLogoWhite} alt="V" />
        <span>{_('Teme')}</span>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.Menu}
        activeKey={location.pathname}
        selectedKeys={location.pathname}
      >
        <Menu.Item key={CLIENT_URLS.DASHBOARD.USERS.SEARCH.route}>
          <SearchOutlined />
          <NavLink to={CLIENT_URLS.DASHBOARD.USERS.SEARCH.buildPath()}>
            {_('Search people')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key={CLIENT_URLS.DASHBOARD.WHISPER.INDEX.route}>
          <EyeInvisibleOutlined />
          <NavLink to={CLIENT_URLS.DASHBOARD.WHISPER.INDEX.buildPath()}>
            {_('Whisper')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key={CLIENT_URLS.DASHBOARD.BLOGS.LIST.route}>
          <CoffeeOutlined />
          <NavLink to={CLIENT_URLS.DASHBOARD.BLOGS.LIST.buildPath()}>
            {_('Blogs')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key={CLIENT_URLS.DASHBOARD.THEMAPEDIA.INDEX.route}>
          <AuditOutlined />
          <NavLink to={CLIENT_URLS.DASHBOARD.THEMAPEDIA.INDEX.buildPath()}>
            {_('Themapedia')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key={CLIENT_URLS.DASHBOARD.MEDIA.LIST.route}>
          <InstagramOutlined />
          <NavLink to={CLIENT_URLS.DASHBOARD.MEDIA.LIST.buildPath()}>
            {_('Media gallery')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key={CLIENT_URLS.DASHBOARD.CLUBS.MAP.route}>
          <EnvironmentOutlined />
          <NavLink to={CLIENT_URLS.DASHBOARD.CLUBS.MAP.buildPath()}>
            {_('Clubs')}
          </NavLink>
        </Menu.Item>
        <SubMenu
          key="user"
          className={styles.RightMenu}
          title={
            <span>
              <UserOutlined />
              <span>{authUser.name}</span>
            </span>
          }
        >
          <Menu.Item
            key={CLIENT_URLS.DASHBOARD.ADMINISTRATION.INDEX.buildPath()}
          >
            <ControlFilled />
            <NavLink
              to={CLIENT_URLS.DASHBOARD.ADMINISTRATION.INDEX.buildPath()}
              I
            >
              {_('Administration')}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={CLIENT_URLS.DASHBOARD.CLUBS.MY.buildPath()}>
            <UsergroupAddOutlined />
            <NavLink to={CLIENT_URLS.DASHBOARD.CLUBS.MY.buildPath()}>
              {_('My clubs')}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={CLIENT_URLS.DASHBOARD.SETTINGS.INDEX.route}>
            <NavLink to={CLIENT_URLS.DASHBOARD.SETTINGS.INDEX.buildPath()}>
              <SettingOutlined /> {_('Settings')}
            </NavLink>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            onClick={async () => {
              await signOut({});
              history.push(CLIENT_URLS.AUTH.SIGN_IN.buildPath());
            }}
          >
            <LogoutOutlined />
            {_('Sign Out')}
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          className={styles.RightMenu}
          key={CLIENT_URLS.DASHBOARD.NOTIFICATIONS.INDEX.route}
        >
          <NavLink to={CLIENT_URLS.DASHBOARD.NOTIFICATIONS.INDEX.buildPath()}>
            <Badge count={99}>
              <BellOutlined />
            </Badge>
          </NavLink>
        </Menu.Item>
        <Menu.Item className={styles.RightMenu} key="themeSwitcher">
          <span>Dark mode</span>{' '}
          <Switch
            onChange={(checked) => {
              themeContext.changeTheme(checked ? 'dark' : 'light');
            }}
          />
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
