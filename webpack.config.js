var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "production",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "src")
        },
        port:3200,
        watchOptions: {
            ignored: "./fake-api"
        }
    },
}