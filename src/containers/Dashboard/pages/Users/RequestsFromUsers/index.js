import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Tag, Table, PageHeader, Layout } from 'antd';

import dashboardStyles from 'containers/Dashboard/index.module.scss';
import { _ } from 'utils/trans';
import UsersMenu from '../UsersMenu';

const { Sider, Content } = Layout;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const RequestsFromUsers = () => {
  return (
    <Layout>
      <Helmet>
        <title>{_('Requests from users')}</title>
        <meta name="description" content={_('Requests from users')} />
      </Helmet>
      <Content className={dashboardStyles.SubContent}>
        <PageHeader
          title={_('Requests from users')}
          subTitle={_('Requests from users')}
        />
        <Table size="large" columns={columns} dataSource={data} />
      </Content>
      <Sider className={dashboardStyles.RightSideBar}>
        <UsersMenu />
      </Sider>
    </Layout>
  );
};

export default RequestsFromUsers;
