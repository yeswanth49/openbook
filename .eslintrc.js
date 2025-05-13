// This is a legacy-style .eslintrc.js file for ESLint v8 compatibility
module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  ignorePatterns: ['terminal-chat/**/*'], // Ignore terminal-chat directory entirely
  // For Next.js linting
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
}; 