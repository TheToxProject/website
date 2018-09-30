const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // do something to config

    config.plugins = [
      ...config.plugins,
      new BundleAnalyzerPlugin()
    ];

    config.resolve = {
      ...config.resolve,
      extensions: ['.mjs', '.js', '.jsx']
    };

    return config;
  }
};
