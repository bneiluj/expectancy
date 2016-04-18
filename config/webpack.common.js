/**
 * @author @bneiluj
 */

 var webpack = require('webpack');
 var helpers = require('./helpers');

/**
 * Webpack Plugins
 */
 var CopyWebpackPlugin = require('core-webpack-plugin');
 var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack Constants
 */
 const METADATA = {
   title: 'Expectancy app',
   baseUrl: '/'
 };

/**
 * Webpack configuration
 */

 module.exports = {
  //  static info for index.html
  metada: METADATA,
  // angular app entry point
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.browser.ts'
  }
 }
