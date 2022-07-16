/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
};

console.log("nextconfig.js", JSON.stringify(module.exports, null, 2));
