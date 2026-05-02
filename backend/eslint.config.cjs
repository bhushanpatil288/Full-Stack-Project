// import js from "@eslint/js";
const js = require("@eslint/js");
// import globals from "globals";
const globals = require("globals");
// import { defineConfig } from "eslint/config";
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "eqeqeq": "error",
      "no-throw-literal": "error",
      "consistent-return": "warn"
    }
  }
]);