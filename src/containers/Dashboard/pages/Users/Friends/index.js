import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Form,
  Layout,
  PageHeader,
  List as AntdList,
  Card,
  Checkbox,
  Skeleton,
  Avatar,
  Descriptions,
} from 'antd';
import { SendOutlined, UserOutlined, FilterFilled } from '@ant-design/icons';

import { _ } from 'utils/trans';

import dashboardStyles from 'containers/Dashboard/index.module.scss';
import UsersMenu from '../UsersMenu';

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

const Friends = () => {
  return (
    <Layout>
      <Helmet>
        <title>{_('Friends')}</title>
        <meta name="description" content={_('Friends')} />
      </Helmet>

      <Content className={dashboardStyles.SubContent}>
        <PageHeader title={_('Friends')} subTitle={_('Friends')} />

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
                <a key="list-loadmore-edit">
                  <SendOutlined style={{ fontSize: '24px' }} />
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <AntdList.Item.Meta
                  avatar={<Avatar size={80} icon={<UserOutlined />} />}
                  title={
                    <a href="https://ant.design">
                      <h3>{item.title}</h3>
                    </a>
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
        <UsersMenu />

        <Card
          size="small"
          title={
            <>
              <FilterFilled /> {_('Filters')}
            </>
          }
          bordered={false}
          className={dashboardStyles.StickyFilter}
        >
          <Form layout="horizontal">
            <Form.Item name="is_online">
              <Checkbox onChange={() => {}}>{_('Is online')}</Checkbox>
            </Form.Item>
            <Form.Item name="is_real">
              <Checkbox onChange={() => {}}>{_('Is real')}</Checkbox>
            </Form.Item>
          </Form>
        </Card>
      </Sider>
    </Layout>
  );
};

export default Friends;
