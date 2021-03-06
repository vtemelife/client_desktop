import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Form,
  Card,
  Drawer,
  Tag,
  Layout,
  PageHeader,
  Button,
  List as AntdList,
} from 'antd';
import {
  QuestionOutlined,
  MessageOutlined,
  LikeOutlined,
  FilterFilled,
} from '@ant-design/icons';

import { _ } from 'utils/trans';

import CLIENT_URLS from 'routes/client';
import IconText from 'containers/Dashboard/components/IconText';
import Comments from 'containers/Dashboard/components/Comments';

import dashboardStyles from 'containers/Dashboard/index.module.scss';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const { CheckableTag } = Tag;
const tagsData = ['BDSM', 'SWING', 'LGBT', 'POLIAMORIA', 'VIRT', 'SEX'];

const { Sider, Content } = Layout;

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
  const [currentWhisper, changeCurrentWhisper] = useState();
  const [tags, changeTags] = useState([]);
  return (
    <Layout>
      <Helmet>
        <title>{_('Whisper')}</title>
        <meta name="description" content={_('Whisper')} />
      </Helmet>
      <Content className={dashboardStyles.SubContent}>
        <PageHeader
          title={_('Whisper')}
          subTitle={_(
            'Whisper is the best place to discover secrets around you',
          )}
          extra={[
            <Link
              to={CLIENT_URLS.DASHBOARD.WHISPER.QUESTION_CREATE.buildPath()}
            >
              <Button key="ask" type="primary">
                <QuestionOutlined />
                {_('Ask your question')}
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
              onClick={() => changeCurrentWhisper(item)}
              key={item.title}
              actions={[
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
              ]}
            >
              <AntdList.Item.Meta />
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
      <Drawer
        width={600}
        title={_('Events (21.10.2020)')}
        placement="right"
        closable={true}
        onClose={() => changeCurrentWhisper()}
        visible={!!currentWhisper}
      >
        {currentWhisper && (
          <>
            <AntdList
              itemLayout="vertical"
              size="small"
              dataSource={[currentWhisper]}
              renderItem={(item) => (
                <AntdList.Item
                  key={item.title}
                  actions={[
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
                  ]}
                >
                  <AntdList.Item.Meta />
                  {item.content}
                </AntdList.Item>
              )}
            />
            <Comments defaultComments={[]} onSubmit={() => {}} height={400} />
          </>
        )}
      </Drawer>
    </Layout>
  );
};

export default List;
