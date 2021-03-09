const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      remotes: {
        blog: 'blog@https://youxfans.github.io/webpack-blog/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
