const path = require("path");

module.exports = {
 entry: path.resolve("./src/index.js"),
 output: {
   path: path.resolve("./dist"),
   filename: "bundle.js"
 },
 module: {
 	rules: [
 		{test: /\.js$/, use: "babel-loader", exclude: path.resolve("node_modules")}
 	]
 }
};