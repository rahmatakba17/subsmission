const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: true,
    host: 'localhost',
    port: 8080,
    open: true,
  },
});