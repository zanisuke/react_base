const Path = require("path");
const HtmlWebpack = require("html-webpack-plugin");

const src = Path.resolve(__dirname, "src");
const build = Path.resolve(__dirname, "build");

module.exports = {
  mode: "development",
  entry: src + "/index.js",
  devServer: {
    host: "localhost",
    port: 3000,
    inline: true,
    open: true
  },
  output: {
    path: build,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpack({
      template: src + "/index.html",
      filename: "index.html"
    })
  ]
};
