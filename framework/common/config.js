const path = require("path");
const fs = require("fs");
const merge = require("deepmerge");
const prettier = require("prettier");

const ALLOWED_FRAMEWORKS = ["shopify", "bigcommerce", "shopify_local"];
const FALLBACK_FRAMEWORK = "shopify";

function withFrameworkConfig(defaultConfig = {}) {
  // Function to switch which config file to load + merge

  let framework = defaultConfig?.framework?.name; // Default config is pulled from next.config.js

  if (!framework) {
    throw new Error(
      "The api framework is missing, please add a valid provider!"
    );
  }

  if (!ALLOWED_FRAMEWORKS.includes(framework)) {
    throw new Error(
      `The api framework "${framework}" cannot be found. Please use one of the following options: ${ALLOWED_FRAMEWORKS.join(
        ", "
      )}`
    );
  }

  if (framework === "shopify_local") {
    framework = FALLBACK_FRAMEWORK;
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: "json" })
  );

  return config;
}

module.exports = { withFrameworkConfig };
