import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-unused-expressions": "error",
      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: false,
        },
      ],
    },
  },
  {
    ignores: ["**/temp.js", "dist/*", "node_modules/*", ".env"],
  },
];
