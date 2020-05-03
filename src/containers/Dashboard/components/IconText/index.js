import React from 'react';
import PropTypes from 'prop-types';
import { Space } from 'antd';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

IconText.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconText;
