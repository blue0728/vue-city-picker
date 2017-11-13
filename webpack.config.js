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
		library: 'vuePicker',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					//css: ExtractTextPlugin.extract('css-loader'),
				},
				postcss: function() {
					return [require('postcss-salad')({
						features: {
							bem: {
								defaultNamespace: undefined, // default namespace to use, none by default 
								style: 'suit', // suit or bem, suit by default, 
								separators: {
									descendent: '__', // overwrite any default separator for chosen style 
									modifier: '--'
								},
								shortcuts: {
									utility: 'util', //override at-rule name 
									descendent: 'e',
									modifier: 'm',
									component: 'b'
								}
							}
						}
					})];
				}
			},
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [new ExtractTextPlugin('vue-picker.css')]
};