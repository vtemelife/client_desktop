import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Redirect } from 'react-router';

import CLIENT_URLS from 'routes/client';

import IsAuth from 'containers/Auth/IsAuth';
import Auth from 'containers/Auth';
import Dashboard from 'containers/Dashboard';
import NotFoundRoute from 'containers/Errors/NotFoundRoute';
import ErrorHandler from 'containers/Errors/Handler';
import { AuthUserContext } from 'containers/ContextProviders/AuthUserService';

import { _ } from 'utils/trans';

const App = () => {
  const authUserContext = useContext(AuthUserContext);
  return (
    <>
      <Helmet titleTemplate="%s - VTeme" defaultTitle={_('VTeme')}>
        <meta name="description" content={_('VTeme')} />
      </Helmet>
      <ErrorHandler>
        <Switch>
          <Route
            path={CLIENT_URLS.INDEX.route}
            exact
            render={() => {
              if (!authUserContext.isAuth) {
                return <Redirect to={CLIENT_URLS.AUTH.INDEX.buildPath()} />;
              }
              return (
                <Redirect
                  to={CLIENT_URLS.DASHBOARD.PROFILE.INDEX.buildPath({
                    userSlug: 'slug',
                  })}
                />
              );
            }}
          />
          <Route path={CLIENT_URLS.AUTH.INDEX.route} component={Auth} />
          <Route
            path={CLIENT_URLS.DASHBOARD.INDEX.route}
            render={(props) => (
              <IsAuth {...props}>
                <Dashboard {...props} />
              </IsAuth>
            )}
          />
          <NotFoundRoute />
        </Switch>
      </ErrorHandler>
    </>
  );
};

export default App;
