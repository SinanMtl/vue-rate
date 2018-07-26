var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var version = require('./package.json').version

var banner = `
vue-rate v${version}
@description Rate component for Vue
https://github.com/SinanMtl/vue-rate
Released under the MIT License.
`

var config = {
	entry: './dev/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'vue-rate.js',
		library: 'VueRate',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	optimization: {
		minimize: true
	},
	mode: 'production',
	devtool: false,
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.BannerPlugin(banner)
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [path.resolve(__dirname, './dev')]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.common.js'
		}
	}
}

var spinner = ora('building for production...')
spinner.start()

webpack(config, function(err, stats) {
	spinner.stop()
	if (err) throw err
	process.stdout.write(
		stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + '\n\n'
	)

	console.log(chalk.cyan('  Build complete.\n'))
	console.log(
		chalk.yellow(
			'  Tip: built files are meant to be served over an HTTP server.\n' +
				"  Opening index.html over file:// won't work.\n"
		)
	)
})
