var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

var config = {
  entry: {
    app: './dev/main.js'
  },
  output: {
    path: path.resolve(__dirname, './demo'),
    filename: '[name].js',
    publicPath: './'
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
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
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
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      '@': path.resolve(__dirname, './dev')
    }
  }
}

var spinner = ora('building for production...')
spinner.start()

webpack(config, function (err, stats) {
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