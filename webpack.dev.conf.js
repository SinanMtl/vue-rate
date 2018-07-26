var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve(dir) {
	return path.join(__dirname, './', dir)
}
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = {
	devtool: '#cheap-module-eval-source-map',
	entry: {
		app: path.resolve(__dirname, './dev/main.js')
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, './dev')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, './dev'),
					path.resolve(__dirname, './test')
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.svg$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: true,
		hot: true,
		compress: true,
		host: HOST || '0.0.0.0',
		port: PORT || 9000,
		open: true,
		overlay: { warnings: false, errors: true },
		publicPath: '/',
		proxy: {},
		quiet: true, // necessary for FriendlyErrorsPlugin
		watchContentBase: true,
		watchOptions: {
			poll: false,
			ignored: /node_modules/
		}
	},
	mode: 'development',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new webpack.ProvidePlugin({
			Vue: 'vue/dist/vue'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new FriendlyErrorsPlugin()
	]
}
