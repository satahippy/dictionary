var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		"./src/Dictionary.js"
	],
	output: {
		path: path.join(__dirname, "dist"),
		filename: "main.js",
		libraryTarget: "umd",
		library: "SataDictionary"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: /node_modules/,
				query: {
					presets: ["es2015"],
					plugins: ["add-module-exports", "transform-object-assign"]
				}
			}
		]
	}
};