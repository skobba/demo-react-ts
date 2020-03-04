// import path from 'path';
// import merge from 'webpack-merge';
// import ErrorOverlayPlugin from 'error-overlay-webpack-plugin';

const path = require('path');
const {merge} = require('webpack-merge');
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

//import baseConfig from './base.config';
const baseConfig = require('./base.config');

const result = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: { contentBase: path.join(__dirname, "src") },
});

module.exports = result;