module.exports = {
  root: true,
  extends: ['plugin:goodeggs/recommended', 'plugin:goodeggs/flowtype'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/{*.,}test{.*,}.{js,jsx,ts,tsx}'],
      extends: ['plugin:goodeggs/mocha'],
      env: {
        mocha: true,
      },
    },
    {
      files: ['src/use_sinon_sandbox.js'],
      env: {
        mocha: true,
      },
    },
    {
      files: ['*.config{.babel,}.js', '.*rc.js'],
      env: {
        node: true,
      },
      rules: {
        'import/no-commonjs': 'off',
      },
    },
  ],
};
