const nodeExternals = require("webpack-node-externals");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const path = require("path");

const paths = require("./paths");
const getClientEnvironment = require("./env");

const publicPath = paths.servedPath;

// Get environment variables to inject into our app.
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (env.stringified["process.env"].NODE_ENV !== '"production"') {
  throw new Error("Production builds must have NODE_ENV=production.");
}

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: [
    require.resolve("./polyfills"),
    path.resolve(__dirname, "..", "server", "index.js")
  ],
  output: {
    path: paths.appBuild,
    filename: "server.js",
    publicPath: publicPath,
    library: "app",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"],
    alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      "react-native": "react-native-web"
    },
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      // This often causes confusion because we only process files within src/ with babel.
      // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
      // please link the files into your node_modules/ and let module-resolution kick in.
      // Make sure your source files are compiled, as they will not be processed in any way.
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loader: "css-loader/locals"
      },
      {
        test: /\.(ttf|eot|otf|svg|png)$/,
        loader: "file-loader?emitFile=false",
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        options: {
          name: "static/media/[name].[hash:8].[ext]"
        }
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader?emitFile=false"
      }
    ]
  }
};
