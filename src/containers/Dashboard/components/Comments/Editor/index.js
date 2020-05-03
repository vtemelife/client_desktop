import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';

import { _ } from 'utils/trans';

const { TextArea } = Input;

const Editor = ({ onSubmit }) => (
  <Form layout="vertical" onFinish={onSubmit}>
    <Form.Item
      name="comment"
      label={_('Your comment')}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <TextArea rows={4} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" type="primary">
        {_('Add Comment')}
      </Button>
    </Form.Item>
  </Form>
);

Editor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Editor;
