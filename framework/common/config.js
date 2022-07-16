const path = require("path");
const merge = require("deepmerge");

function withFramworkConfig(defaultConfig = {}) {
  const framework = "shopify";

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));

  const config = merge(defaultConfig, frameworkNextConfig);

  return config;
}

module.exports = { withFramworkConfig };
