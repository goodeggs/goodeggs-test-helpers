# Good Eggs Test Helpers

[![Build Status](https://travis-ci.org/goodeggs/goodeggs-test-helpers.svg?branch=master)](https://travis-ci.org/goodeggs/goodeggs-test-helpers)

Basic setup used for all Good Eggs tests.

## Test structure

Good Eggs tests use the BDD testing DSL from [mocha](https://mochajs.org/), with a few extras.

## Assertions

Good Eggs tests use [chai](http://chaijs.com/), with a bunch of plugins ready for you.

## Contributing

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) when contributing to this project.

```
yarn install
yarn test
```

## Releasing

To release a new version of this module, use yarn to bump the version
in `package.json` and create a git tag, then push. This will automatically
get published to the NPM registry via CI.

```sh
yarn version --new-version=<major|minor|patch|premajor|preminor|prepatch>
git push --follow-tags
```

## License

[MIT](License.md)
