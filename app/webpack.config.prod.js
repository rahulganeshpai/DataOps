const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

function generate_path(name) {
  return path.resolve(__dirname, name);
}

const path_dist = generate_path("dist");
const path_webpack = generate_path("webpack.config.js");
console.log("path_webpack", path_webpack);

module.exports = {
  mode: "production",
  entry: "./app.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "bundle.js",
    path: path_dist,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(?:js)$/,
        exclude: [/node_modules/, path_webpack],
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: [
              "@babel/plugin-transform-jscript",
              "@babel/plugin-transform-runtime",
              "@babel/plugin-transform-strict-mode",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [new CleanWebpackPlugin(), new CaseSensitivePathsPlugin()],
};
