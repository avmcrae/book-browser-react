const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require("path");

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/, loader: "eslint-loader"
            },
            {test: /\.js$/, use: "babel-loader"}
        ]
    },
    plugins: [new webpack.DefinePlugin({GOOGLE_BOOKS_API_KEY: JSON.stringify(process.env.GOOGLE_BOOKS_API_KEY || '')})],
    devtool: "cheap-module-source-map"
};