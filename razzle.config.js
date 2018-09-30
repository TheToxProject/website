const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const PUBLIC_PATH = "https://tox-rebrand.herokuapp.com/"

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // do something to config

    config.plugins = [
      ...config.plugins,
      // process.env.NODE_ENV !== 'producion' && new BundleAnalyzerPlugin(),
      new SWPrecacheWebpackPlugin(
        {
          cacheId: 'tox-rebrand',
          dontCacheBustUrlsMatching: /\.\w{8}\./,
          filename: 'service-worker.js',
          filepath: config.output.path + '/public/' + 'service-worker.js',
          minify: true,
          navigateFallback: PUBLIC_PATH,
          staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        }
      )
    ];

    config.resolve = {
      ...config.resolve,
      extensions: ['.mjs', '.js', '.jsx']
    };

    return config;
  }
};
