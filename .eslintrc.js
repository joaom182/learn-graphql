module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('./src/graphql/schema.json'),
      },
    ],
  },
  plugins: ['@typescript-eslint', 'prettier', 'graphql'],
};
