const webpack = require("webpack");
const path = require("path");
const nodeModules = path.resolve("./node_modules");

module.exports = {
 entry: ["babel-polyfill", path.resolve("./src/index.js")],
 output: {
   path: path.resolve("./dist"),
   filename: "bundle.js"
 },
 module: {
 	rules: [
    {
      enforce: "pre",
      test: /\.js$/, loader: "eslint-loader", exclude: nodeModules
    },
 		{test: /\.js$/, use: "babel-loader", exclude: nodeModules}
 	]
 },
 plugins: [new webpack.DefinePlugin({GOOGLE_BOOKS_API_KEY: JSON.stringify(process.env.GOOGLE_BOOKS_API_KEY || '')})]
};