const path = require('path');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const { DefinePlugin } = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'docs'),
    port: 8868,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      remotes: {
        blog: 'blog@http://localhost:8867/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
    new DefinePlugin({
      BASENAME: JSON.stringify('/'),
    }),
  ],
});
