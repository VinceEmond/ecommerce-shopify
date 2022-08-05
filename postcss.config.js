module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
};

// module.exports = {
//   plugins: ["tailwindcss", "postcss-nesting", "autoprefixer"],
// };

// module.exports = {
//   plugins: ["tailwindcss", "postcss-nesting", "postcss-nested", "autoprefixer"],
// };

// Just for testing!
// module.exports = {
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };
