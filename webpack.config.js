const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./index.js",
    game: "./src/game/game.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  devServer: {
    contentBase: "./docs",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|wav|ogg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["main"],
      filename: "index.html",
      favicon: "./logo.png",
    }),
    new HtmlWebpackPlugin({
      template: "./src/game/game.html",
      chunks: ["game"],
      filename: "game.html",
      favicon: "./logo.png",
    }),
  ],
};
