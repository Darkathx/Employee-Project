var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "production",
    devServer: {
        port:3200,
        index: "./index.html",
    },
}