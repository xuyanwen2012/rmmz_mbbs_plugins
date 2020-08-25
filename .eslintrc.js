/**
 * @type {string[]}
 */
const globals = require('./rmmz_globals.json');

module.exports = {
  extends: [
    'eslint:recommended',
    'google',
  ],
  globals: Object.fromEntries(globals.map((key) => [key, 'writable'])),
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
  ],
  ignorePatterns: [
    '**/dist/*.js',
  ],
  rules: {
    'require-jsdoc': 'warn',
    // Turned off because RMMZ codebase does not follow this rule.
    // (e.g. Scene_Map)
    'camelcase': 'off',
    // Since we all has RPG Maker, we probably not using Unix, so enforce CRLF
    'linebreak-style': ['error', 'windows'],
    'no-unused-vars': 'warn',
  },
};
