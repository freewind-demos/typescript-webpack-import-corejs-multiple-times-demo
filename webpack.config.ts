import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: Configuration = {
  mode: 'development',
  entry: {
    entry1: ['@babel/polyfill/noConflict', './entry1.ts'],
    entry2: ['@babel/polyfill/noConflict', './entry2.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};

export default config;
