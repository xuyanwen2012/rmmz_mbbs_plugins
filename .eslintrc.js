/**
 * Global variables in RMMZ
 * @type {string[]}
 */
const globals = require('./rmmz_globals.json');

module.exports = {
  extends: './node_modules/gts/',
  globals: Object.fromEntries(globals.map((key) => [key, 'writable'])),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 0,
    '@typescript-eslint/ban-ts-ignore': 0
  }
};
