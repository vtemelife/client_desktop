import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const SelectLocale = ({ className }) => {
  const handleChange = () => {};
  return (
    <Select className={className} defaultValue="ru_RU" onChange={handleChange}>
      <Option value="ru_RU">Русский</Option>
      <Option value="en_US">English</Option>
    </Select>
  );
};

SelectLocale.propTypes = {
  className: PropTypes.string,
};

export default SelectLocale;
