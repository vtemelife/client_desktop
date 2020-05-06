import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, PageHeader } from 'antd';
import { Map, ObjectManager } from 'react-yandex-maps';

import { _ } from 'utils/trans';

import dashboardStyles from 'containers/Dashboard/index.module.scss';

const { Content } = Layout;

const ClubsMap = () => {
  return (
    <Layout>
      <Helmet>
        <title>{_('Clubs Map')}</title>
        <meta name="description" content={_('Clubs Map')} />
      </Helmet>

      <Content className={dashboardStyles.SubContent}>
        <PageHeader title={_('Clubs Map')} subTitle={_('Clubs Map')} />
        <Map
          defaultState={{ center: [55.76, 37.64], zoom: 4 }}
          width="100%"
          height="calc(100vh - 200px)"
          modules={['package.full']}
        >
          <ObjectManager
            options={{
              clusterize: true,
              gridSize: 32,
            }}
            objects={{
              preset: 'islands#greenDotIcon',
            }}
            clusters={{
              preset: 'islands#greenClusterIcons',
            }}
            features={[]}
          />
        </Map>
      </Content>
    </Layout>
  );
};

export default ClubsMap;
