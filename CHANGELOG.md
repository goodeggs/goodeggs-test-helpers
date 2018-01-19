# [3.0.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v2.0.0...v3.0.0)

* bumps from version `1.14.1` to `4.1.6` of [Sinon](http://sinonjs.org/). We now have access to `stub.callsFake` to change the implementation of a stub on the fly.

### BREAKING CHANGES

Sinon APIs for:

* `sinon.stub`
* `sinon.useFakeTimers`
* `sinon.sandbox`
* `stub.reset`

have changed subtly (but for the better). Look at the Sinon.js changelog ([2.0](http://sinonjs.org/guides/migrating-to-2.0), [3.0](http://sinonjs.org/guides/migrating-to-3.0), and [4.0](http://sinonjs.org/guides/migrating-to-4.0)) for details.
