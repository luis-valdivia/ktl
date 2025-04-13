module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
    plugins: ['vue'],
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  }
  