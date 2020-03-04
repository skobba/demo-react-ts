// import merge from 'webpack-merge';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// import prodConfig from './prod.config';

const {merge} = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('./prod.config');


module.exports =  merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      generateStatsFile: true
    })
  ]
});
