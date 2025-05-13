import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    ignores: ['.next/**/*'] // Ignore all .next files
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { 
      react: pluginReact,
      '@next/next': nextPlugin,
      'react-hooks': pluginReactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/prop-types': 'off',
      '@next/next/no-img-element': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { 
        ignore: ['jsx', 'global'] 
      }],
      'no-useless-escape': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-case-declarations': 'off'
    }
  },
  pluginReact.configs.flat.recommended,
]);