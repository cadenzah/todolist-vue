const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoader = require('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env) => {
  // file paths
  const configPath = path.join(__dirname);
  const buildPath = path.join(configPath, '..', 'build');

  const config = {
    entry: './src/main.js',
    output: {
      publicPath: '/',
      filename: 'js/[name].js',
      path: buildPath,
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules',
          use: 'babel-loader',
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader', {
              loader: 'css-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
      ],
    },
    devServer: {
      publicPath: '/',
      contentBase: buildPath,
      compress: true,
      port: 3000,
      historyApiFallback: true,
      
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new VueLoaderPlugin(),
    ],
  };

  return config;
}
