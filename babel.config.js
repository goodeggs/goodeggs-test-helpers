module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '8',
          browsers: ['last 1 version', 'last 2 iOS versions'],
        },
      },
    ],
    '@babel/typescript',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
