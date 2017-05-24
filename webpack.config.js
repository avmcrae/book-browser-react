const path = require("path");
const nodeModules = path.resolve("./node_modules");

module.exports = {
 entry: path.resolve("./src/index.js"),
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
 }
};