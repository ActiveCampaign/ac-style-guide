const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isBuild = env === 'production'

// webpack.config.js
module.exports = {
	mode: env,

	entry: {
		index: './js/index.js',
		colors: './js/page/colors.js',
		main: './sass/main.scss'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},

	module: {
			rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								minimize: isBuild,
							},
						},
						'sass-loader',
					],
				}),
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ExtractTextPlugin('main.css'),
		new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery'
		})
	],

};