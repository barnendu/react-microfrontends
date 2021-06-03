const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:8080/'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // To Use babel Loader
                loader:
                  'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
                    '@babel/preset-react',
                  ], // to compile react to ES5
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template:
            './public/index.html',
            favicon: './public/favicon.ico'
        }),
        new ModuleFederationPlugin({
            name: 'App',
            filename:
              'remoteEntry.js',
            remotes: {
                MFE1: 'MFE1@http://localhost:8083/remoteEntry.js',
                MFE2: 'MFE2@http://localhost:8082/remoteEntry.js'
            }
        })
    ]
};
