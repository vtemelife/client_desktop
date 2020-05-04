import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Badge,
  Layout,
  PageHeader,
  List as AntdList,
  Card,
  Menu,
  Skeleton,
  Avatar,
  Descriptions,
} from 'antd';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  UserSwitchOutlined,
  TeamOutlined,
  MessageOutlined,
  UserOutlined,
  BarsOutlined,
} from '@ant-design/icons';

import { _ } from 'utils/trans';
import CLIENT_URLS from 'routes/client';

import dashboardStyles from 'containers/Dashboard/index.module.scss';

const { Sider, Content } = Layout;

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];

const List = () => {
  const location = useLocation();
  return (
    <Layout>
      <Helmet>
        <title>{_('Chats')}</title>
        <meta name="description" content={_('Chats')} />
      </Helmet>

      <Content className={dashboardStyles.SubContent}>
        <PageHeader title={_('Chats')} subTitle={_('Chats')} />

        <AntdList
          loading={false}
          itemLayout="horizontal"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 20,
          }}
          dataSource={data}
          renderItem={(item) => (
            <AntdList.Item
              actions={[
                <Link
                  to={CLIENT_URLS.DASHBOARD.CHATS.DETAIL.buildPath({
                    chatSlug: 'slug',
                  })}
                >
                  <BarsOutlined style={{ fontSize: '24px' }} />
                </Link>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <AntdList.Item.Meta
                  avatar={<Avatar size={80} icon={<UserOutlined />} />}
                  title={
                    <Link
                      to={CLIENT_URLS.DASHBOARD.CHATS.DETAIL.buildPath({
                        chatSlug: 'slug',
                      })}
                    >
                      <h3>
                        <TeamOutlined /> {item.title}
                      </h3>
                    </Link>
                  }
                  description={
                    <Descriptions column={1} size="small">
                      <Descriptions.Item label="Product">
                        Россия / Нижегородская область / Нижний Новгород
                      </Descriptions.Item>
                      <Descriptions.Item label="Last seen">
                        24.10.2020 20:30
                      </Descriptions.Item>
                    </Descriptions>
                  }
                />
              </Skeleton>
            </AntdList.Item>
          )}
        />
      </Content>
      <Sider className={dashboardStyles.RightSideBar}>
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
            <Menu.Item key={CLIENT_URLS.DASHBOARD.CHATS.LIST.buildPath()}>
              <MessageOutlined />
              <NavLink to={CLIENT_URLS.DASHBOARD.CHATS.LIST.buildPath()}>
                {_('All')} <Badge count={25} />
              </NavLink>
            </Menu.Item>
            <Menu.Item key={CLIENT_URLS.DASHBOARD.CHATS.GROUPS.buildPath()}>
              <TeamOutlined />
              <NavLink to={CLIENT_URLS.DASHBOARD.CHATS.GROUPS.buildPath()}>
                {_('Groups')} <Badge count={25} />
              </NavLink>
            </Menu.Item>
            <Menu.Item
              key={CLIENT_URLS.DASHBOARD.CHATS.CONVERSATIONS.buildPath()}
            >
              <UserSwitchOutlined />
              <NavLink
                to={CLIENT_URLS.DASHBOARD.CHATS.CONVERSATIONS.buildPath()}
              >
                {_('Conversation')} <Badge count={25} />
              </NavLink>
            </Menu.Item>
          </Menu>
        </Card>
      </Sider>
    </Layout>
  );
};

export default List;
