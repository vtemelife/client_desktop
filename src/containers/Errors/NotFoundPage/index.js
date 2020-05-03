import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Row } from 'antd';

import { _ } from 'utils/trans';
import styles from './index.module.scss';

const { Content } = Layout;

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>{_('404')}</title>
      <meta name="description" content={_('404')} />
    </Helmet>
    <Content>
      <Layout>
        <Content>
          <Row justify="center">
            <h1 className={styles.title}>{_('Page Not Found')}</h1>
          </Row>
        </Content>
      </Layout>
    </Content>
  </Layout>
);

export default NotFoundPage;
