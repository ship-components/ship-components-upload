/**
 * Example Webpack Configuration for Ship Components
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see: webpack.github.io
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Where to start
  entry: {
    index: path.resolve(__dirname, '../../src/index.js')
  },

  // Where to output
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  module: {
    preLoaders: [{
      test: /\.(jsx?|es6)$/,
      exclude: /(node_modules|dist)/,
      include: /src\/.*/,
      loader: 'eslint'
    }],
    loaders: [
      {
        // Setup babel loader for core files
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // ES6/JSX for external modules
      {
        test: /\.(jsx?|es6)$/,
        include: [
          /ship-components\-.*\/src/
        ],
        loader: 'babel'
      },
      // Ensure 'use strict' is everywhere
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'strict'
      },
      {
        // CSS Modules
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
           // Generated classnames can be configured here by changing `localIdentName`
          'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]!postcss-loader'
        )
      }
    ]
  },
  eslint: {
    // Strict linting enforcing
    failOnWarning: true
  },

  // CSS Modules / PostCSS config
  postcss: [
    require('postcss-nested'),
    require('postcss-simple-vars')({
      variables: function() {
        return {
          'primary-color' : '#5e8aaa'
        };
      }
    }),
    require('postcss-color-hex-alpha'),
    require('postcss-hexrgba'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('autoprefixer')
  ],
  stats: {
    children: false,
    colors: true,
    modules: false,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    fallback: path.resolve(__dirname, '../../node_modules')
  },

  resolveLoader: {
    fallback: path.resolve(__dirname, '../../node_modules')
  },
  plugins: [
    // Required to combine all css chunks together
    new ExtractTextPlugin('[name].css')
  ]
};
