const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolvePath(relativePath) {
  const appDir = fs.realpathSync(process.cwd());
  return path.resolve(appDir, relativePath);
}

module.exports = {
  mode: 'development',
  // Entry points to the application.
  entry: [
    // Bundle polyfills to ensure compatibility.
    require.resolve('./src/polyfills.js'),
    require.resolve('./src/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    hotOnly: true,
  },
  plugins: [
    // Generate index.html file with <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: resolvePath('public/index.html'),
    }),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    // Emit hot updates.
    new webpack.HotModuleReplacementPlugin(),
    // Work better with Moment.js.
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell webpack to provide empty mocks so imports work.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  // Controls if and how source maps are generated.
  devtool: 'cheap-module-source-map',
};
