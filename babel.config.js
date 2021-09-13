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
    [
      'module-resolver',
      {
        alias: {
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
