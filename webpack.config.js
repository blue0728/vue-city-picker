'use strict'

var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./package.json');
var banner = `${pkg.name} v${pkg.version}\n${pkg.description}\n${pkg.homepage}\n@author ${pkg.author}`;

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'vue-city-picker.js',
		library: 'vueCityPicker',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [new ExtractTextPlugin('vue-picker.css')]
};