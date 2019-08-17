const path  = require("path");

module.exports = {
    entry: "./src/javascript/index.js",
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "main.js"
    },

    //add loaders here
    rules: [
        {
            test:/\.js$/,
            exclude:/(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ],
    mode: "development"
}