const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                use: [
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                // use: ['babel-loader', 'eslint-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.png', '.jsx', '.scss'],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@': path.resolve(__dirname, './app/src'),
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }
        ),
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