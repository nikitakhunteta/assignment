/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseWebPack = './webpack.base.babel';
module.exports = require(baseWebPack)({
  mode: 'development',
  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js') // Start with js/app.js
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },


  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    // basically the final html file
    new HtmlWebpackPlugin({
      // place js at bottom of body element
      inject: true,
      // where to inject
      template: 'app/index.html'
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false
    }),
    new CopyWebpackPlugin([
      { from: 'server/static', to: 'static' },
    ])
  ],
  devtool: 'eval-source-map',

  performance: {
    hints: false
  }
});
