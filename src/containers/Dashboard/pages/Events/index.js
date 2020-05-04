import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CLIENT_URLS from 'routes/client';

import NotFoundRoute from 'containers/Errors/NotFoundRoute';

import EventsCalendar from './EventsCalendar';

const Events = () => {
  return (
    <Switch>
      <Route
        exact
        path={CLIENT_URLS.DASHBOARD.EVENTS.CALENDAR.route}
        component={EventsCalendar}
      />
      <NotFoundRoute />
    </Switch>
  );
};

export default Events;
