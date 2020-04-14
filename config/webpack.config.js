var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    // bundle the client for hot reloading
    'webpack-hot-middleware/client',

    path.join(__dirname, '/../src/index.js'),
    // the entry point of our app
  ],

  output: {
    filename: 'static/bundle.js',
    // the output bundle

    path: path.join(__dirname, '/../dist'),

    publicPath: '/static/'
    // necessary for HMR to know where to load the hot update chunks
  },

  performance: {
    hints: false,
    maxEntrypointSize: 400000000
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [path.join(__dirname, '/../src/assets/scss')],
            },
          },
        ],
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new webpack.optimize.OccurrenceOrderPlugin(),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
  optimization: {
    minimize: false
  }
};
