import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';

import { _ } from 'utils/trans';

import CLIENT_URLS from 'routes/client';

import Comments from 'containers/Dashboard/components/Comments';

import styles from './index.module.scss';

const { Sider, Content } = Layout;

const PostDetail = () => {
  return (
    <Layout>
      <Helmet>
        <title>{_('Post Detail')}</title>
        <meta name="description" content={_('Post Detail')} />
      </Helmet>
      <Content className={styles.SubContent}>
        <PageHeader
          title={'Post'}
          extra={[
            <Link
              to={CLIENT_URLS.DASHBOARD.THEMAPEDIA.POST_UPDATE.buildPath({
                postSlug: 'slug',
              })}
            >
              <Button type="primary">
                <EditOutlined />
                {_('Update your article')}
              </Button>
            </Link>,
          ]}
        />
        Post content
      </Content>

      <Sider className={styles.RightSideBar}>
        <Comments defaultComments={[]} onSubmit={() => {}} />
      </Sider>
    </Layout>
  );
};

export default PostDetail;
