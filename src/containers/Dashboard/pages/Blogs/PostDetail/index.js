import React from 'react';
import { Layout } from 'antd';

import dashboardStyles from 'containers/Dashboard/index.module.scss';

const { Sider, Content } = Layout;

const PostDetail = () => {
  return (
    <Layout>
      <Content className={dashboardStyles.SubContent}>Content</Content>
      <Sider className={dashboardStyles.RightSideBar}>Sider</Sider>
    </Layout>
  );
};

export default PostDetail;
