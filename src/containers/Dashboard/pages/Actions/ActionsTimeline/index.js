import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Timeline, PageHeader, Layout } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import dashboardStyles from 'containers/Dashboard/index.module.scss';
import { _ } from 'utils/trans';

import styles from './index.module.scss';

const { Sider, Content } = Layout;

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
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined className="timeline-clock-icon" />}
            color="red"
          >
            <Card
              hoverable
              style={{ width: 240 }}
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
