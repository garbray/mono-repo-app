const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const clearConsole = require("react-dev-utils/clearConsole");
var openBrowser = require("react-dev-utils/openBrowser");
var webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const common = require("./webpack.common");

clearConsole();

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3030,
    contentBase: ["../dist", "../public"],
    hot: true,
    after: () => {
      openBrowser("http://localhost:3030");
    },
  },
  target: "web",
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../public/mockServiceWorker.js"),
          to: path.join(__dirname, "../dist"),
        },
      ],
    }),
  ],
  devtool: "inline-source-map",
  // devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);
