import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Tag,
  Avatar,
  Layout,
  PageHeader,
  Button,
  List as AntdList,
  Card,
  Radio,
  Form,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  StarOutlined,
  PlusOutlined,
  MessageOutlined,
  LikeOutlined,
  UserOutlined,
  ReadOutlined,
  FilterFilled,
  SortDescendingOutlined,
  EditOutlined,
  BarsOutlined,
} from '@ant-design/icons';

import { _ } from 'utils/trans';

import CLIENT_URLS from 'routes/client';

import dashboardStyles from 'containers/Dashboard/index.module.scss';
import styles from './index.module.scss';

import IconText from 'containers/Dashboard/components/IconText';

const { Sider, Content } = Layout;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user: {
      name: 'Name',
      slug: 'slug',
    },
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const { CheckableTag } = Tag;
const tagsData = ['BDSM', 'SWING', 'LGBT', 'POLIAMORIA', 'VIRT', 'SEX'];
const bloggersData = [
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
  'Blogger 1',
];
const hashData = [
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
  '#Hash 1',
];

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const List = () => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    fontSize: '12px',
  };
  const [tags, changeTags] = useState([]);
  return (
    <Layout>
      <Helmet>
        <title>{_('Blogs')}</title>
        <meta name="description" content={_('Blogs')} />
      </Helmet>
      <Content className={dashboardStyles.SubContent}>
        <PageHeader
          title={_('Blogs')}
          subTitle={_('Published blogs from site users')}
          extra={[
            <Link to={CLIENT_URLS.DASHBOARD.BLOGS.POST_CREATE.buildPath()}>
              <Button key="ask" type="primary">
                <PlusOutlined />
                {_('Publish your post')}
              </Button>
            </Link>,
          ]}
        />
        <AntdList
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={listData}
          renderItem={(item) => (
            <AntdList.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
                <Link
                  to={CLIENT_URLS.DASHBOARD.BLOGS.USER.buildPath({
                    userSlug: item.user.slug,
                  })}
                >
                  <IconText
                    icon={ReadOutlined}
                    text="read other blogger's posts"
                    key="list-vertical-message"
                  />
                </Link>,
                <Link
                  to={CLIENT_URLS.DASHBOARD.BLOGS.POST_UPDATE.buildPath({
                    postSlug: 'slug',
                  })}
                >
                  <IconText icon={EditOutlined} text="edit" />
                </Link>,
                <Link
                  to={CLIENT_URLS.DASHBOARD.BLOGS.POST_DETAIL.buildPath({
                    postSlug: 'slug',
                  })}
                >
                  <IconText icon={BarsOutlined} text="details" />
                </Link>,
              ]}
              extra={
                <img
                  width={200}
                  height={200}
                  alt="logo"
                  src="https://cs5-3.4pda.to/5290239.png"
                />
              }
            >
              <AntdList.Item.Meta
                avatar={<Avatar size={60} icon={<UserOutlined />} />}
                title={
                  <Link
                    to={CLIENT_URLS.DASHBOARD.BLOGS.POST_DETAIL.buildPath({
                      postSlug: 'slug',
                    })}
                  >
                    {item.title}
                  </Link>
                }
                description={
                  <span className={styles.user}>
                    <UserOutlined />{' '}
                    <Link
                      to={CLIENT_URLS.DASHBOARD.PROFILE.INDEX.buildPath({
                        userSlug: item.user.slug,
                      })}
                    >
                      {item.user.name}
                    </Link>
                  </span>
                }
              />
              {item.content}
            </AntdList.Item>
          )}
        />
      </Content>
      <Sider className={dashboardStyles.RightSideBar}>
        <Card
          size="small"
          title={
            <>
              <SortDescendingOutlined /> {_('Sort')}
            </>
          }
          bordered={false}
        >
          <Radio.Group>
            <Radio style={radioStyle} value={1} checked>
              Last
            </Radio>
            <Radio style={radioStyle} value={2}>
              Popular blogger
            </Radio>
            <Radio style={radioStyle} value={3}>
              More comments
            </Radio>
            <Radio style={radioStyle} value={4}>
              More likes
            </Radio>
          </Radio.Group>
        </Card>
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
          <Form layout="vertical">
            <Form.Item label={'Categories'} name="is_online">
              {tagsData.map((tag) => (
                <CheckableTag
                  key={tag}
                  checked={tags.indexOf(tag) > -1}
                  onChange={(checked) => {
                    const newTags = checked
                      ? [...tags, tag]
                      : tags.filter((t) => t !== tag);
                    changeTags(newTags);
                  }}
                >
                  {tag}
                </CheckableTag>
              ))}
            </Form.Item>
            <Form.Item label={'Bloggers'} name="is_real">
              {bloggersData.map((tag, index) => (
                <Link
                  style={{ fontSize: `${randomInt(8, 20, index)}px` }}
                  to={CLIENT_URLS.DASHBOARD.BLOGS.USER.buildPath({
                    userSlug: tag,
                  })}
                  key={tag}
                >
                  {tag}
                </Link>
              ))}
            </Form.Item>
            <Form.Item label={'Hash Tags'} name="hash_tags">
              {hashData.map((tag, index) => (
                <Link
                  style={{ fontSize: `${randomInt(8, 20, index)}px` }}
                  key={tag}
                  to={CLIENT_URLS.DASHBOARD.BLOGS.USER.buildPath({
                    userSlug: tag,
                  })}
                >
                  {tag}
                </Link>
              ))}
            </Form.Item>
          </Form>
        </Card>
      </Sider>
    </Layout>
  );
};

export default List;
