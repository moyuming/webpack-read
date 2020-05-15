const path = require("path");
module.exports = {
	mode: "development",
	context: path.resolve(__dirname),
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	}
};
