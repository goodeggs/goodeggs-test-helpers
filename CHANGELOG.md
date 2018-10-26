# [6.5.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v6.5.0...v6.5.1)

- Fix flow typedefs

# [6.5.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v6.4.1...v6.5.0)

- Add `createRollbarStub`, `createAnalyticsStub`, and `createLoggerStub`; the first two are mocks we commonly copy/paste between repositories; the latter is a factory we usually get from `useSinonSandbox`, but in a mutative stub pattern. This adapts each stub to use our more common factory pattern.
- Remove first args to `before/after/beforeEach/afterEach` to fix Jest compatibility
- Bump node to 8.11.4 on Travis
- Update development scripts to be more standard

# [6.2.1](https://github.com/goodeggs/goodeggs-test-helpers/compare/v6.1.0...v6.2.0)

- Fix Flow v0.75.0 incompatibility

# [6.2.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v6.1.0...v6.2.0)

- Add `.blank()` assertion to Chai type definition

# [6.1.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v6.0.1...v6.1.0)

- Add Enzyme `className`, `props` type definitions

# [6.0.1](https://github.com/goodeggs/goodeggs-test-helpers/compare/v6.0.0...v6.0.1)

- Fix Sinon `callsFake` type definition

# [6.0.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v5.1.0...v6.0.0)

### BREAKING CHANGES
- `useSinonSandbox()` returns a `{sandbox, stubLogger}`
- `this.stub` => `sandbox.stub`
- `this.spy` => `sandbox.spy`
- `const clock = sandbox.useFakeTimers()` to mock time
- `this.stubTime()` => `clock.setSystemTime()`
- `this.stubLogger()` => `stubLogger()`
- `sinon.match()` => `sandbox.match()`
- sinon no longer exported. Use `sandbox` from `{useSinonSandbox}` instead

# [5.1.3](https://github.com/goodeggs/goodeggs-test-helpers/compare/v5.1.2...v5.1.3)

- Fix flowtype definitions

# [5.1.2](https://github.com/goodeggs/goodeggs-test-helpers/compare/v5.1.1...v5.1.2)

- Add missing chai, chai-enzyme assertions to flowtype

# [5.1.1](https://github.com/goodeggs/goodeggs-test-helpers/compare/v5.1.0...v5.1.1)

- Fix path to Sinon in browser environments

# [5.0.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v4.0.0...v5.0.0)

### BREAKING CHANGES
- `this.stubLogger({logger})` => `this.stubLogger(logger)`

# [4.0.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v3.0.0...v4.0.0)

### BREAKING CHANGES
- Remove support for `babel-node`ing a test file - No more import side-effects. Always run tests via npm script. Simplifies interface and enforces single standard for running tests.
- Export all helpers from `index.js` - No more reaching into the module (e.g. `goodeggs-test-helpers/chai`)
- Move `./run_tests.sh` from `goodeggs-ops-api-test-helpers` (previously called `api_test.sh`) - so we can use it for modules too
- Remove `withContext()` - prefer mocha's `beforeEach` instead
- Remove `given()` - prefer mocha's `describe` or `context` instead
- Explicitly define sinon sandboxes via `useSinonSandbox()` - No more import side effects. See which hooks are configured at the top of each test file. This also means that the clock is no longer stubbed be default.
- Move `stubLogger` from  `goodeggs-ops-api-test-helpers` - so all sinon sandboxing is centralized and so we can delete `goodeggs-ops-api-test-helpers`
- Remove `chai-json-schema` - almost never used!
- Bump to latest version of all dependencies (including `chai` and `mocha`)
- Remove `this.assert` and `this.expect` - import explicitly from `goodeggs-test-helpers` instead

# [3.0.0](https://github.com/goodeggs/goodeggs-test-helpers/compare/v2.0.0...v3.0.0)

* bumps from version `1.14.1` to `4.1.6` of [Sinon](http://sinonjs.org/). We now have access to `stub.callsFake` to change the implementation of a stub on the fly.

### BREAKING CHANGES

Sinon APIs for:

* `sinon.stub`
* `sinon.useFakeTimers`
* `sinon.sandbox`
* `stub.reset`

have changed subtly (but for the better). Look at the Sinon.js changelog ([2.0](http://sinonjs.org/guides/migrating-to-2.0), [3.0](http://sinonjs.org/guides/migrating-to-3.0), and [4.0](http://sinonjs.org/guides/migrating-to-4.0)) for details.
