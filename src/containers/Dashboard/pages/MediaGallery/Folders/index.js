import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, List, Layout, Spin, PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

import { _ } from 'utils/trans';

import CLIENT_URLS from 'routes/client';

import dashboardStyles from 'containers/Dashboard/index.module.scss';

const { Content } = Layout;

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

const Folders = () => {
  return (
    <Spin spinning={false}>
      <Layout>
        <Helmet>
          <title>{_('Media Folders')}</title>
          <meta name="description" content={_('Media Folders')} />
        </Helmet>
        <Content className={dashboardStyles.SubContent}>
          <PageHeader
            title={_('Media Folders')}
            subTitle={_('Collect and organize your media in folders')}
            extra={[
              <Link to={CLIENT_URLS.DASHBOARD.BLOGS.POST_CREATE.buildPath()}>
                <Button key="ask" type="primary">
                  <PlusOutlined />
                  {_('Create new folder')}
                </Button>
              </Link>,
            ]}
          />
          <List
            size="large"
            grid={{
              gutter: 16,
              xs: 4,
              sm: 4,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Link
                  to={CLIENT_URLS.DASHBOARD.MEDIA.FOLDER_DETAIL.buildPath({
                    folderSlug: 'slug',
                  })}
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Card.Meta
                      title={item.title}
                      description="www.instagram.com"
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </Spin>
  );
};

export default Folders;
