import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Avatar,
  Layout,
  PageHeader,
  List as AntdList,
  Card,
  Timeline,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  StarOutlined,
  MessageOutlined,
  LikeOutlined,
  UserOutlined,
  ReadOutlined,
  EditOutlined,
  BarsOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

import CLIENT_URLS from 'routes/client';

import dashboardStyles from 'containers/Dashboard/index.module.scss';
import IconText from 'containers/Dashboard/components/IconText';
import { _ } from 'utils/trans';

import styles from './index.module.scss';

const { Sider, Content } = Layout;

const listData = [
  {
    href: 'http://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    user: {
      name: 'Name',
      slug: 'slug',
    },
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
];

const ActionsTimeline = () => {
  return (
    <Layout>
      <Helmet>
        <title>{_('Actions')}</title>
        <meta name="description" content={_('Actions')} />
      </Helmet>
      <Content className={dashboardStyles.SubContent}>
        <PageHeader
          title={_('Actions')}
          subTitle={_('The latest actions on site')}
        />
        <Timeline className={styles.Timeline}>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            <AntdList
              itemLayout="vertical"
              size="small"
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
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined className="timeline-clock-icon" />}
            color="red"
          >
            <Card
              hoverable
              style={{ width: 600 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Card.Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
      </Content>
      <Sider className={dashboardStyles.RightSideBar}></Sider>
    </Layout>
  );
};

export default ActionsTimeline;
