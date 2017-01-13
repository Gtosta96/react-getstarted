const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const config = {
	context: path.join(__dirname, '/app/src'),
	devtool: debug ? 'inline-sourcemap' : null,
	entry: './app.jsx',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env'] // es2015
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: path.resolve(__dirname, '/app/public/js/'),
		publicPath: 'app/dist/js/',
		filename: 'app.min.js'
	},

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
	]
};

module.exports = config;
