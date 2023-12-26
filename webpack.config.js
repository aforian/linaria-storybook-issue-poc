const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = function webpack(env, argv) {
  const isProduction = argv.mode === 'production';

  const config = {
    entry: '/src/entry/index.js',
    output: {
      library: {
        type: 'commonjs2',
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: '@linaria/webpack-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: !isProduction },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    optimization: {
      minimize: isProduction,
      minimizer: [new CssMinimizerPlugin(), '...'],
    },
    plugins: [
      new MiniCssExtractPlugin(),
    ],
    devtool: 'source-map',
  };
  return config;
};
