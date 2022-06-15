const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, 'src/assets/icons'),
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            outputPath: '/'
                        }
                    },
                    'svg-transform-loader',
                    'svgo-loader'
                ],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.png', '.jsx', '.scss'],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@': path.resolve(__dirname, './src'),
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'pack',
            inject: 'body',
            template: 'index.html'
        }),
        new SpriteLoaderPlugin({
            plainSprite: true
        })
    ],
    devServer: {
        static: path.join(__dirname, './dist'),
        compress: true,
        port: 3001,
        open: true,
        client: {
            overlay: true,
        }
    }
};