import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Form,
  Layout,
  PageHeader,
  List as AntdList,
  Card,
  Checkbox,
  Select,
  Descriptions,
  Skeleton,
  Avatar,
  Input,
} from 'antd';
import {
  PlusOutlined,
  SendOutlined,
  UserOutlined,
  FilterFilled,
} from '@ant-design/icons';

import { _ } from 'utils/trans';

import dashboardStyles from 'containers/Dashboard/index.module.scss';
import styles from './index.module.scss';
import UsersMenu from '../UsersMenu';

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

const Search = () => {
  return (
    <Layout>
      <Helmet>
        <title>{_('Search')}</title>
        <meta name="description" content={_('Search')} />
      </Helmet>

      <Content className={dashboardStyles.SubContent}>
        <PageHeader
          title={_('Search')}
          subTitle={_('Search users')}
          extra={[
            <Input.Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              size="large"
              className={styles.Search}
            />,
          ]}
        ></PageHeader>

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
                <a key="list-loadmore-more">
                  <PlusOutlined style={{ fontSize: '24px' }} />
                </a>,
                <a key="list-loadmore-edit">
                  <SendOutlined style={{ fontSize: '24px' }} />
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <AntdList.Item.Meta
                  avatar={<Avatar size={150} icon={<UserOutlined />} />}
                  title={
                    <a href="https://ant.design">
                      <h2>{item.title}</h2>
                    </a>
                  }
                  description={
                    <Descriptions column={1} size="small">
                      <Descriptions.Item label="Product">
                        Россия / Нижегородская область / Нижний Новгород
                      </Descriptions.Item>
                      <Descriptions.Item label="Billing">
                        Prepaid
                      </Descriptions.Item>
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
                        занимаюсь спортом, не курю, могу выпить, мой девиз -
                        есть желание есть возможности!!! опыт есть, больше всего
                        нравится МЖМ, сексвайф и ЖМЖ, особенно если девушки би.
                        опыт общения с парами есть. если интересно, пришлю фото.
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

export default Search;
