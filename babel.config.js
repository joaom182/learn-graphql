module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-typescript'],
    ['babel-plugin-transform-typescript-metadata'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties'],
    [
      'module-resolver',
      {
        alias: {
          '~/': './src/',
          '~configs': './src/configs',
          '~graphql': './src/graphql',
          '~database': './src/database',
          '~modules': './src/modules',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
