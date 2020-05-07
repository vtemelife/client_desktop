import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext();
export const ThemeConsumer = ThemeContext.Consumer;

export const ThemeProvider = (props) => {
  const [theme, changeTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default ThemeProvider;
