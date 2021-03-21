// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: "production",
  devtool: "source-map",
  module: {
    // rules: [
    //   {
    //     test: /\.(css|scss|sass)$/,
    //     use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    //   },
    // ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: true,
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  // plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(common, prodConfig);
