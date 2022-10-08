const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    mode: "production",
    devServer: {
        port: 3200,
        static: {
            directory: path.join(__dirname, "dist"),
        },
        open: true,
    },
}