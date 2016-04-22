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
  },
  // Options affecting the resolving of modules.
  resolve: {
    // An array of extensions that should be used to resolve modules.
    extensions: ['', '.ts', '.js'],
    // Make sure root is src
    root: helpers.root('src');
    // Remove other default in src
    modulesDirectories: ['node_modules'],
  },
  // Options affecting the normal modules.
  module: {
    // An array of applied pre and post loaders.
    preLoaders: [
      // Tslint loader support for *.ts files
      //
      // See: https://github.com/wbuchwalter/tslint-loader
      // { test: /\.ts$/, loader: 'tslint-loader', exclude: [ helpers.root('node_modules') ] },

      // Source map loader support for *.js files
      // Extracts SourceMaps for source files that as added as sourceMappingURL comment.
      //
      // See: https://github.com/webpack/source-map-loader
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular2-material')
        ]
      }
    ],
    // An array of automatically applied loaders.
    //
    // IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
    // This means they are not resolved relative to the configuration file.
    //
    // See: http://webpack.github.io/docs/configuration.html#module-loaders
    loaders: [
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    ]
  }
 }
