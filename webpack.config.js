const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('babel-polyfill');

module.exports = {
    mode: 'production',
    entry: [
        "babel-polyfill",
        "./src/app.tsx",
        "./src/style.scss"
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.min.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.tsx', '.js', '.scss', '.css']
    },
    plugins: [
        new UglifyJsPlugin({
            parallel: true,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true
                },
                output: {
                    comments: false
                }
            }
        }),
        new ExtractTextPlugin("style.min.css")
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react'],
                    plugins: ['transform-decorators-legacy', 'transform-object-rest-spread']
                }
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|otf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true }},
                        { loader: 'sass-loader' }
                    ]
                })
            }
        ]
    }
};