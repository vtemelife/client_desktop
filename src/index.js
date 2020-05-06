import React from 'react';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RestfulProvider } from 'restful-react';
import { HelmetProvider } from 'react-helmet-async';
import { YMaps } from 'react-yandex-maps';
import { _ } from 'utils/trans';
import AuthUserProvider from 'containers/ContextProviders/AuthUserService';
import App from 'containers/App';
import { getCookie } from 'utils/cookie';
import * as serviceWorker from './serviceWorker';

import enUS from 'antd/es/locale/en_US';

// import 'styles/dark/colors.less';
// import 'styles/dark/colors.scss';
import 'styles/light/colors.less';
import 'styles/light/colors.scss';

import 'styles/index.scss';

const history = createBrowserHistory();

const requestOptions = () => {
  const headers = {};
  const csrftoken = getCookie('csrftoken');
  if (csrftoken) {
    headers['X-CSRFToken'] = csrftoken;
  }
  return { headers };
};

ReactDOM.render(
  <Router history={history}>
    <BrowserRouter>
      <RestfulProvider base="/" requestOptions={() => requestOptions()}>
        <HelmetProvider>
          <AuthUserProvider>
            <ConfigProvider
              locale={enUS}
              componentSize="middle"
              form={{
                validateMessages: {
                  // eslint-disable-next-line no-template-curly-in-string
                  required: _('${label} is required!'),
                  types: {
                    // eslint-disable-next-line no-template-curly-in-string
                    email: _('${label} is not validate email!'),
                    // eslint-disable-next-line no-template-curly-in-string
                    number: _('${label} is not a validate number!'),
                  },
                  number: {
                    // eslint-disable-next-line no-template-curly-in-string
                    range: _('${label} must be between ${min} and ${max}'),
                  },
                },
              }}
            >
              <YMaps>
                <App />
              </YMaps>
            </ConfigProvider>
          </AuthUserProvider>
        </HelmetProvider>
      </RestfulProvider>
    </BrowserRouter>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
