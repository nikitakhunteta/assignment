/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

process.noDeprecation = true;
// modue bundler for appolication
// Loaders let you run preprocessors on files as they’re imported.This allows you to bundle static resources beyond JavaScript
module.exports = (options) => ({

  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      // Compile into js/build.js
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/'
    },
    options.output
  ), // Merge with env dependent settings
  // how to treat different kind of modules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: true
          }
        }
      },
      {
        // Preprocess our own .scss files: sass to css; css to JS; outputs css into style
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      { // The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        // The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
    ]
  },
  plugins: options.plugins.concat([
    // Automatically load modules instead of having to import or require them everywhere.
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    // define global constants which can be configured at compile time.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]),
  // Configure how modules are resolved.
  resolve: {
    modules: ['app', 'node_modules'],
    // the order in which files without extensions in import line are resolved
    extensions: ['.js', '.jsx', '.scss', '.react.js'],
    // will prioritise the file in browser in a node module import, eg, import * from ''''
    mainFields: ['browser', 'jsnext:main', 'main']
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window // Compile for usage in a browser-like environment
  performance: options.performance || {},
  optimization: {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
      minChunks: 2, // Minimum number of chunks that must share a module before splitting.
      chunks: 'all' // include all types of chunks // for sharing
    }
  }
});
