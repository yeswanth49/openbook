import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { resolve } from "path";
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

const __dirname = fileURLToPath(new URL(".", import.meta.url));

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
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
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
      'react-hooks/exhaustive-deps': 'warn',
      // Disable alt-text rule for JSX components (icons don't need alt text)
      'jsx-a11y/alt-text': 'off',
      // Allow anonymous default exports for config files
      'import/no-anonymous-default-export': ['warn', {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowNew: false,
        allowLiteral: false,
        allowObject: true
      }]
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Allow explicit any in type definitions
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
];

export default eslintConfig; 