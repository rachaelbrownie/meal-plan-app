const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = (env) => ({
  mode: "development",
  target: env.TARGET === "SERVER" ? "node" : undefined,
  entry:
    env.TARGET === "SERVER"
      ? "./src/server/index.ts"
      : "./src/client/index.tsx",
  output: {
    path:
      env.TARGET === "SERVER" ? __dirname + "/dist" : __dirname + "./public",
    filename: "index.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(?:[tj]sx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-typescript",
              ...(env.TARGET === "SERVER"
                ? []
                : [["@babel/preset-react", { runtime: "automatic" }]]),
            ],
          },
        },
      },
    ],
  },
  externals: env.TARGET === "SERVER" ? [nodeExternals()] : [],
  plugins:
    env.TARGET === "SERVER"
      ? []
      : [
          new HtmlWebpackPlugin({
            inject: false,
            template: "./src/client/index.ejs",
          }),
        ],
  devServer: {
    port: 9001,
    historyApiFallback: true,
  },
});
