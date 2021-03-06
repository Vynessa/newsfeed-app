require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'eval-source-map',
  entry: './src/js/Client.jsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.min.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'e-Feedly',
      template: './src/index.html',
      inject: true
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        NEWS_API_KEY: JSON.stringify(process.env.NEWS_API_KEY),
        API_KEY: JSON.stringify(process.env.apiKey),
        AUTH_DOMAIN: JSON.stringify(process.env.authDomain),
        DATABASE_URL: JSON.stringify(process.env.databaseURL),
        PROJECT_ID: JSON.stringify(process.env.projectId),
        STORAGE_BUCKET: JSON.stringify(process.env.storageBucket),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.messagingSenderId)

      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss']
  }
};

module.exports = config;
