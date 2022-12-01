const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

let plugins = [
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', }),
]

if (process.env.NODE_ENV === 'development') {
    plugins.push('react-refresh/babel');
}

module.exports = {
    mode,
    entry: { main: path.resolve(__dirname, './src/index.js') },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    plugins,
    module: {
        rules: [
            { test: /\.js$|jsx/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource', },
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline', },
            { test: /\.(html)$/, use: ['html-loader'] },
            { test: /\.(s[ac]|c)ss$/i, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader',], },
        ],
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
        port: 8081,
    },
}