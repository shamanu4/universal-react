const nodeExternals = require("webpack-node-externals");
const path = require("path");

const srcPath = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].[hash].css",
  chunkFilename: "[id].[hash].css"
});

module.exports = {
  context: srcPath,
  entry: "./server/index.js",
  output: {
    path: distPath,
    filename: "server.js",
    publicPath: "/assets/"
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: ["*", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["loadable-components/babel"],
          presets: [
            [
              "env",
              {
                targets: {
                  node: 11
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  externals: nodeExternals(),
  plugins: [miniCssExtractPlugin]
};
