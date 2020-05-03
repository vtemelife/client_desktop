const proxy = require('http-proxy-middleware');

const proxyBaseConfig = {
  changeOrigin: true,
  secure: false,
};

const proxyApiConfig = {
  ...proxyBaseConfig,
  target: process.env.API_SERVER || 'http://localhost:8000',
  headers: {
    'X-Forwarded-Host': 'localhost:3000',
  },
};

module.exports = function(app) {
  app.use(proxy('/api/', proxyApiConfig));
  app.use(proxy('/admin/', proxyApiConfig));
  app.use(proxy('/server_static/', proxyApiConfig));
  app.use(proxy('/server_media/', proxyApiConfig));
};
