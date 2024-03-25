module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:react-hooks/recommended',
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  ignorePatterns: [".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort", "jsx-a11y", "prettier"],
  settings: {
    "import/resolver": {
      alias: {
        map: [["tailwind.config", "./tailwind.config"]],
        extensions: [".ts", ".js", ".jsx", ".json", ".svg", ".tsx"]
      }
    }
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "@typescript-eslint/no-unused-vars": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"]
        ]
      }
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  }
};
