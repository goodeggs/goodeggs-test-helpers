# Goodeggs Test Helpers

[![Greenkeeper badge](https://badges.greenkeeper.io/goodeggs/goodeggs-test-helpers.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/goodeggs/goodeggs-test-helpers.svg?branch=master)](https://travis-ci.org/goodeggs/goodeggs-test-helpers)

Basic setup used for all goodeggs tests.

## Test structure

Goodeggs tests use the BDD testing DSL from [mocha](https://mochajs.org/), with a few extras.

## Assertions

Goodeggs tests use [chai](http://chaijs.com/), with a bunch of plugins ready for you. Chai's `expect` is available in the global scope.

## Conveniences

Set up so that you can run an individual test file with `babel-node` or `node`. Requires that `test:single` and `test:watch:single` be registered in your `npm scripts`, with a command that will run a file called `__TESTFILE__`.

Example:
```json
{
  "scripts": {
    "test": "mocha **/test.js",
    "test:single": "mocha __TESTFILE__",
    "test:watch:single": "mocha --watch __TESTFILE__",
  }
}
```
