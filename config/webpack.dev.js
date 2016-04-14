/**
 * @author: @bneiluj
 */
var helpers = require('.helpers');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');


/**
 * Webpack Plugins
 */
 var webpackPlugin = require('webpack/lib/DefinePlugin');

 /**
  * Webpack Contants
  */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig.metadata, {
  host: 'localhost',
  port: 3000,
  ENV: ENV,
  HMR: HMR
});

/**
 * Webpack configuration
 */
