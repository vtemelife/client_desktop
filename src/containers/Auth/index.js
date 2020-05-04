import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Redirect } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';
import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import ResetPasswordConfirm from './ResetPasswordConfirm';

const Auth = () => (
  <>
    <Helmet>
      <body className="auth-body" />
    </Helmet>
    <Switch>
      <Route
        path={CLIENT_URLS.AUTH.INDEX.route}
        exact={true}
        render={() => <Redirect to={CLIENT_URLS.AUTH.SIGN_IN.buildPath()} />}
      />
      <Route exact path={CLIENT_URLS.AUTH.SIGN_IN.route} component={SignIn} />
      <Route
        exact={true}
        path={CLIENT_URLS.AUTH.SIGN_UP.route}
        component={SignUp}
      />
      <Route
        exact
        path={CLIENT_URLS.AUTH.RESET_PASSWORD.route}
        component={ResetPassword}
      />
      <Route
        exact
        path={CLIENT_URLS.AUTH.RESET_PASSWORD_CONFIRM.route}
        component={ResetPasswordConfirm}
      />
      <NotFoundRoute />
    </Switch>
  </>
);

export default Auth;
