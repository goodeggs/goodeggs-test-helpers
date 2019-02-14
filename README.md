# Goodeggs Test Helpers

[![Build Status](https://travis-ci.org/goodeggs/goodeggs-test-helpers.svg?branch=master)](https://travis-ci.org/goodeggs/goodeggs-test-helpers)

Basic setup used for all Good Eggs tests.

## Test structure

Goodeggs tests use the BDD testing DSL from [mocha](https://mochajs.org/), with a few extras.

## Assertions

Goodeggs tests use [chai](http://chaijs.com/), with a bunch of plugins ready for you.

## Contributing

```
yarn install
yarn test
```

## Deploying a new version

This module is automatically deployed when a version tag bump is detected by travis.
Remember to update the [changelog](CHANGELOG.md)!

```
yarn version
```