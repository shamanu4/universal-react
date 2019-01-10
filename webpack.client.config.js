const HTMLWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");
const webpack = require("webpack");

const srcPath = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist");

const plugins = [
  new HTMLWebpackPlugin({
    title: "Get real playlists to share with Spotify",
    template: path.resolve(__dirname, "src/client/index.ejs")
  }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": '"production"'
  })
];

if (process.env.NODE_ENV === "analyse") {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  context: srcPath,
  target: "web",
  entry: {
    client: `${srcPath}/client/index.js`
  },
  output: {
    path: distPath,
    filename: "[name].js",
    publicPath: "/assets/"
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: ["*", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { compact: false }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins,
  devtool: "source-map"
};
