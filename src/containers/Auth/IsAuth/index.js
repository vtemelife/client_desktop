import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';

import { AuthUserContext } from 'containers/ContextProviders/AuthUserService';
import CLIENT_URLS from 'routes/client';

const IsAuth = ({ children }) => {
  const authUserContext = useContext(AuthUserContext);
  const location = useLocation();
  if (!authUserContext.isAuth) {
    return (
      <Redirect
        to={{
          pathname: CLIENT_URLS.AUTH.SIGN_IN.buildPath(),
          state: { next: location.pathname },
        }}
      />
    );
  }
  return children;
};

IsAuth.propTypes = {
  children: PropTypes.any.isRequired,
};

export default IsAuth;
