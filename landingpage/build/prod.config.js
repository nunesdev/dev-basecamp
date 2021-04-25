const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'js/[name].bundle.[chunkhash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?importLoaders=1',
            'sass-loader',
            // 'postcss-loader'
          ],
        }),
      },
    ],
  },

  plugins: [
    // Clear out `build` directory between builds
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
    }),

    // extract css into its own file
    new ExtractTextPlugin('css/[name].[chunkhash].css'),

    // Minify JS
    new UglifyJsPlugin({
      sourceMap: true,
      compress: true,
    }),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
});
