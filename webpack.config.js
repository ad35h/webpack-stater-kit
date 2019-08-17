const path  = require("path");

module.exports = {
    entry: "./src/javascript/index.js",
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "main.js"
    },
    mode: "development"
}