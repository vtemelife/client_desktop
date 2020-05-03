const { override, addLessLoader, addWebpackPlugin } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
  addLessLoader({
    lessOptions: {
      // If you are using less-loader@5 please spread the lessOptions to options directly
      javascriptEnabled: true,
    },
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
);
