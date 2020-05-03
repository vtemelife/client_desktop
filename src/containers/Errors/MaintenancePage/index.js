import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Row } from 'antd';

import { _ } from 'utils/trans';
import styles from './index.module.scss';

const { Content } = Layout;

const MaintenancePage = () => (
  <Layout>
    <Helmet>
      <title>{_('502')}</title>
      <meta name="description" content={_('502')} />
    </Helmet>
    <Content>
      <Layout>
        <Content>
          <Row justify="center">
            <h1 className={styles.title}>{_('Maintance')}</h1>
          </Row>
        </Content>
      </Layout>
    </Content>
  </Layout>
);

export default MaintenancePage;
