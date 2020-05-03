import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Form,
  Badge,
  Layout,
  PageHeader,
  List as AntdList,
  Card,
  Menu,
  Checkbox,
  Select,
  Descriptions,
} from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  UsergroupAddOutlined,
  UserAddOutlined,
  TeamOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import { _ } from 'utils/trans';
import CLIENT_URLS from 'routes/client';

import dashboardStyles from 'containers/Dashboard/index.module.scss';

const { Sider, Content } = Layout;
const { Option } = Select;

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
        <title>{_('Users')}</title>
        <meta name="description" content={_('Users')} />
      </Helmet>
      <Content className={dashboardStyles.SubContent}>
        <PageHeader title={_('Users')} subTitle={_('Users')} />
        <AntdList
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 20,
          }}
          grid={{
            gutter: 16,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <AntdList.Item>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Card.Meta title={item.title} />
                <br />
                <Descriptions column={1} size="small">
                  <Descriptions.Item label="Product">
                    Россия / Нижегородская область / Нижний Новгород
                  </Descriptions.Item>
                  <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
                  <Descriptions.Item label="time">
                    М: 1982 (38 лет)
                  </Descriptions.Item>
                  <Descriptions.Item label="Amount">
                    М: 1982 (38 лет)
                  </Descriptions.Item>
                  <Descriptions.Item label="Discount">
                    М: 1982 (38 лет)
                  </Descriptions.Item>
                  <Descriptions.Item label="Official">
                    о себе- я М гетеро 37/182/87, размер больше среднего,
                    занимаюсь спортом, не курю, могу выпить, мой девиз - есть
                    желание есть возможности!!! опыт есть, больше всего нравится
                    МЖМ, сексвайф и ЖМЖ, особенно если девушки би. опыт общения
                    с парами есть. если интересно, пришлю фото.
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </AntdList.Item>
          )}
        />
      </Content>
      <Sider className={dashboardStyles.RightSideBar}>
        <Card size="small" title={_('Menu')} bordered={false}>
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
            <Menu.Item key="mail" icon={<UsergroupAddOutlined />}>
              {_('Requests from users')} <Badge count={25} />
            </Menu.Item>
            <Menu.Item key="app" icon={<UserAddOutlined />}>
              {_('Requests from me')} <Badge count={25} />
            </Menu.Item>
          </Menu>
        </Card>
        <Card size="small" title={_('Filters')} bordered={false}>
          <Form layout="horizontal">
            <Form.Item name="is_online">
              <Checkbox onChange={() => {}}>{_('Is online')}</Checkbox>
            </Form.Item>
            <Form.Item name="is_real">
              <Checkbox onChange={() => {}}>{_('Is real')}</Checkbox>
            </Form.Item>
            <Form.Item label={'Region'} name="is_real">
              <Select
                mode="multiple"
                placeholder="Select region"
                // defaultValue={['china']}
                onChange={() => {}}
                optionLabelProp="label"
                style={{ width: '100%' }}
              >
                <Option value="m" label="Moscow">
                  <div className="demo-option-label-item">Moscow</div>
                </Option>
              </Select>
            </Form.Item>
            <Form.Item label={'City'} name="is_real">
              <Select
                mode="multiple"
                placeholder="Select city"
                // defaultValue={['china']}
                onChange={() => {}}
                optionLabelProp="label"
                style={{ width: '100%' }}
              >
                <Option value="m" label="Moscow">
                  <div className="demo-option-label-item">Moscow</div>
                </Option>
              </Select>
            </Form.Item>
          </Form>
        </Card>
      </Sider>
    </Layout>
  );
};

export default List;
