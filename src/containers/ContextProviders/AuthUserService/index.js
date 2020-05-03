import React from 'react';
import PropTypes from 'prop-types';
import { useGet } from 'restful-react';

import SERVER_URLS from 'routes/server';

export const AuthUserContext = React.createContext();
export const AuthUserConsumer = AuthUserContext.Consumer;

export const AuthUserProvider = (props) => {
  const authUser = useGet(SERVER_URLS.SIGN_IN_VERIFY.buildPath());
  if (authUser.loading) {
    return null;
  }
  const isNotAuth = authUser.error;
  return (
    <AuthUserContext.Provider value={{ authUser, isAuth: !isNotAuth }}>
      {props.children}
    </AuthUserContext.Provider>
  );
};

AuthUserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default AuthUserProvider;
