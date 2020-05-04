import React from 'react';
import { Badge, Card, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import {
  UsergroupAddOutlined,
  UserAddOutlined,
  TeamOutlined,
  SearchOutlined,
  BarsOutlined,
} from '@ant-design/icons';

import { _ } from 'utils/trans';
import CLIENT_URLS from 'routes/client';

const UsersMenu = () => {
  const location = useLocation();
  return (
    <Card
      size="small"
      title={
        <>
          <BarsOutlined /> {_('Menu')}
        </>
      }
      bordered={false}
    >
      <Menu
        mode="inline"
        activeKey={location.pathname}
        selectedKeys={location.pathname}
      >
        <Menu.Item key={CLIENT_URLS.DASHBOARD.USERS.SEARCH.buildPath()}>
          <SearchOutlined />
          <NavLink to={CLIENT_URLS.DASHBOARD.USERS.SEARCH.buildPath()}>
            {_('Search')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key={CLIENT_URLS.DASHBOARD.USERS.FRIENDS.buildPath()}>
          <TeamOutlined />
          <NavLink to={CLIENT_URLS.DASHBOARD.USERS.FRIENDS.buildPath()}>
            {_('Friends')}
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key={CLIENT_URLS.DASHBOARD.USERS.REQUESTS_FROM_USERS.buildPath()}
        >
          <UsergroupAddOutlined />
          <NavLink
            to={CLIENT_URLS.DASHBOARD.USERS.REQUESTS_FROM_USERS.buildPath()}
          >
            {_('Requests from users')} <Badge count={25} />
          </NavLink>
        </Menu.Item>
        <Menu.Item
          key={CLIENT_URLS.DASHBOARD.USERS.REQUESTS_FROM_ME.buildPath()}
        >
          <UserAddOutlined />
          <NavLink
            to={CLIENT_URLS.DASHBOARD.USERS.REQUESTS_FROM_ME.buildPath()}
          >
            {_('Requests from me')} <Badge count={25} />
          </NavLink>
        </Menu.Item>
      </Menu>
    </Card>
  );
};

export default UsersMenu;
