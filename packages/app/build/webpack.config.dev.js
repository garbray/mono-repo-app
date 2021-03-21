const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const clearConsole = require("react-dev-utils/clearConsole");
var openBrowser = require("react-dev-utils/openBrowser");

const common = require("./webpack.common");

clearConsole();

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3030,
    contentBase: "../dist",
    hot: true,
    after: () => {
      openBrowser("http://localhost:3030");
    },
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "inline-source-map",
  // devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);
