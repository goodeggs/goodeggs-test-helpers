module.exports = {
  root: true,
  extends: ['plugin:goodeggs/recommended', 'plugin:goodeggs/flowtype'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['src/use_sinon_sandbox.js'],
      env: {
        mocha: true,
      },
    },
    {
      files: ['babel.config.js'],
      rules: {
        'import/no-commonjs': 'off',
      },
    },
  ],
};
