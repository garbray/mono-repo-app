const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    app: path.join(__dirname, "../src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: "/node_modules/",
      },
      // {
      //   use: ["style-loader", "css-loader", "sass-loader"],
      //   test: /\.(css|scss|sass)$/,
      // },
      // {
      //   type: "asset",
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public", "index.html"),
    }),
    new ResourceHintWebpackPlugin(),
  ],
};
