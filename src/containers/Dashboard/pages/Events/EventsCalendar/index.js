import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Layout,
  PageHeader,
  Button,
  Badge,
  List as AntdList,
  Select,
  Radio,
  Card,
  Form,
  Drawer,
} from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined, FilterFilled } from '@ant-design/icons';

import { _ } from 'utils/trans';

import CLIENT_URLS from 'routes/client';

import dashboardStyles from 'containers/Dashboard/index.module.scss';
import styles from './index.module.scss';

const { Sider, Content } = Layout;
const { Option } = Select;

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className={styles.Events}>
      {listData.map((item) => (
        <li key={item.content}>
          <Badge
            status={item.type}
            className={styles.Event}
            text={item.content}
          />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const EventsCalendar = () => {
  const [currentEvents, changeCurrentEvents] = useState([]);
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <Layout>
      <Helmet>
        <title>{_('Events')}</title>
        <meta name="description" content={_('Events')} />
      </Helmet>
      <Content className={dashboardStyles.SubContent}>
        <PageHeader
          title={_('Events')}
          subTitle={_('Discover the best events & parties')}
          extra={[
            <Link to={CLIENT_URLS.DASHBOARD.EVENTS.CREATE.buildPath()}>
              <Button key="ask" type="primary">
                <PlusOutlined />
                {_('Create your event')}
              </Button>
            </Link>,
          ]}
        />
        <Calendar
          className={styles.Calendar}
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          onSelect={() =>
            changeCurrentEvents([
              { type: 'warning', content: 'This is warning event' },
              {
                type: 'success',
                content: 'This is very long usual event。。....',
              },
              { type: 'error', content: 'This is error event 1.' },
              { type: 'error', content: 'This is error event 2.' },
              { type: 'error', content: 'This is error event 3.' },
              { type: 'error', content: 'This is error event 4.' },
            ])
          }
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
        >
          <Form layout="horizontal">
            <Form.Item label={'Region'} name="is_real">
              <Select
                mode="multiple"
                placeholder="Select region"
                // defaultValue={['china']}
                onChange={handleChange}
                optionLabelProp="label"
                style={{ width: '100%' }}
              >
                <Option value="m" label="Moscow">
                  <div className="demo-option-label-item">Moscow</div>
                </Option>
              </Select>
            </Form.Item>
            <Form.Item label={'City'} name="is_real">
              <Select
                mode="multiple"
                placeholder="Select city"
                // defaultValue={['china']}
                onChange={handleChange}
                optionLabelProp="label"
                style={{ width: '100%' }}
              >
                <Option value="m" label="Moscow">
                  <div className="demo-option-label-item">Moscow</div>
                </Option>
              </Select>
            </Form.Item>
            <Form.Item label={'Club'} name="is_real">
              <Select
                mode="multiple"
                placeholder="Select city"
                // defaultValue={['china']}
                onChange={handleChange}
                optionLabelProp="label"
                style={{ width: '100%' }}
              >
                <Option value="m" label="Moscow">
                  <div className="demo-option-label-item">Moscow</div>
                </Option>
              </Select>
            </Form.Item>
          </Form>
        </Card>
      </Sider>
      <Drawer
        width={600}
        title={_('Events (21.10.2020)')}
        placement="right"
        closable={true}
        onClose={() => changeCurrentEvents([])}
        visible={currentEvents.length > 0}
      >
        <AntdList
          itemLayout="vertical"
          size="small"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={[
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
          ]}
          renderItem={(item) => (
            <AntdList.Item
              key={item.title}
              actions={[
                <Form>
                  <Form.Item label={'Participation'} name="participation">
                    <Radio.Group defaultValue="a" size="small" title="jjjj">
                      <Radio.Button value="a">{_('Yes')}</Radio.Button>
                      <Radio.Button value="b" checked>
                        {_('No')}
                      </Radio.Button>
                      <Radio.Button value="c">{_('May be')}</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </Form>,
              ]}
              extra={
                <img
                  width={100}
                  height={100}
                  alt="logo"
                  src="https://cs5-3.4pda.to/5290239.png"
                />
              }
            >
              <AntdList.Item.Meta
                title={<a href={item.href}>{item.content}</a>}
                description={item.content}
              />
            </AntdList.Item>
          )}
        />
      </Drawer>
    </Layout>
  );
};

export default EventsCalendar;
