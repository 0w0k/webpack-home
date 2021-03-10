const path = require('path');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'home',
      remotes: {
        blog: 'blog@https://youxfans.github.io/webpack-blog/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
    new DefinePlugin({
      BASENAME: JSON.stringify('/webpack-home/'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/404.html'), to: path.resolve(__dirname, 'docs/404.html') },
      ],
    }),
  ],
});
