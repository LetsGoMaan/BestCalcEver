module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    indent: 'off',
    'spaced-comment': 'off',
    'no-restricted-globals': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 0,
  },
};
