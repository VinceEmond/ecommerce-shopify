const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  framework: {
    name: "shopify_local",
  },
  reactStrictMode: false,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

console.log("nextconfig.js", JSON.stringify(module.exports, null, 2));
