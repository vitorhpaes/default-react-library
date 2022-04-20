const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const APP_PATH = "./public"

const resolveModules = {
  rules: [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  }, {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
    },
  }, {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  }, {
    test: /\.scss$/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    }, {
      loader: 'sass-loader'
    }],
  }],
};


module.exports = function build(env, arg) {

  console.table({
    arg,
    env
  })
  const config = {
    entry: path.resolve(__dirname, APP_PATH),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      library: "default",
      libraryTarget: "umd"
    },
    devServer: {
      compress: true,
      port: 5000,
    },
    mode: arg.mode,
    devtool: 'source-map',
    module: resolveModules,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(APP_PATH, 'index.html'),
        filename: 'index.html'
      })
    ],
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        react: path.join(__dirname, 'node_modules', 'react'),
        '@app': path.resolve(__dirname, 'src/'),
      },
    },
  }
  return config
}
