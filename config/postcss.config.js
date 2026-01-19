const path = require("node:path");

const tailwindConfigPath = path.join(__dirname, "tailwind.config.js");

module.exports = {
  plugins: [
    require("tailwindcss")(tailwindConfigPath),
    require("autoprefixer"),
  ],
};
