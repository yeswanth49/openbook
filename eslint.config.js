const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      ".next/**/*",
      "out/**/*", 
      "node_modules/**/*",
      "terminal-chat/**/*"
    ]
  },
  {
    settings: {
      next: {
        rootDir: '.',
      },
    },
    rules: {
      // Disable specific rules that might cause issues
      '@next/next/no-html-link-for-pages': 'off',
      // Allow img elements instead of requiring next/image
      '@next/next/no-img-element': 'off',
      // Disable the unescaped entities rule
      'react/no-unescaped-entities': 'off',
      // Set hook dependencies to warning
      'react-hooks/exhaustive-deps': 'warn'
    },
  }
];

module.exports = eslintConfig; 