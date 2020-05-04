import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Spin, PageHeader, Button } from 'antd';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';

import { _ } from 'utils/trans';

import CLIENT_URLS from 'routes/client';

import Comments from 'containers/Dashboard/components/Comments';

import styles from './index.module.scss';

const { Sider, Content } = Layout;

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const List = () => {
  const [loading, changeLoading] = useState(true);
  return (
    <Spin spinning={loading}>
      <Layout>
        <Helmet>
          <title>{_('Media Gallery')}</title>
          <meta name="description" content={_('Media Gallery')} />
        </Helmet>
        <Content className={styles.SubContent}>
          <PageHeader
            title={_('Media Gallery')}
            subTitle={_('Gallery')}
            extra={[
              <Link to={CLIENT_URLS.DASHBOARD.BLOGS.POST_CREATE.buildPath()}>
                <Button key="ask" type="primary">
                  <UploadOutlined />
                  {_('Upload your media')}
                </Button>
              </Link>,
            ]}
          />
          <div
            className={styles.SubContent}
            style={loading ? { display: 'none' } : { display: 'block' }}
          >
            <ImageGallery
              items={images}
              showPlayButton={false}
              // lazyLoad={true}
              onImageLoad={() => {
                changeLoading(false);
              }}
            />
          </div>
        </Content>

        <Sider className={styles.RightSideBar}>
          <Comments defaultComments={[]} onSubmit={() => {}} />
        </Sider>
      </Layout>
    </Spin>
  );
};

export default List;
