# Good Eggs Test Helpers

Basic setup used for **legacy Good Eggs tests**, which are not fully using Jest as they should be.

:warning: [Jest is the blessed test runner, assertion library, and mock library](https://github.com/goodeggs/standards-and-best-practices/blob/2e4a4782bea91954abf3c3323c57f9dd2d8ca15f/modules-and-libraries/blessed.md#testing)
for Good Eggs code.

## Assertions

:warning: New Good Eggs code must use **Jest assertions**. Consider refactoring existing code
via https://github.com/skovhus/jest-codemods.

This library exports an `expect` function, which is an instance of [chai](http://chaijs.com/),
with a standard set of configured plugins:
- [chai-as-promised](https://www.chaijs.com/plugins/chai-as-promised/)
- [dirty-chai](https://www.chaijs.com/plugins/dirty-chai/)
- [sinon-chai](https://www.chaijs.com/plugins/sinon-chai/)
- [chai-datetime](https://www.chaijs.com/plugins/chai-datetime/)

```js
import {expect} from 'goodeggs-test-helpers';

describe('...', () => {
  it('...', () => {
    expect(true).to.be.true();
  });
});
```

## Mocks

:warning: New Good Eggs code must use **Jest mocks**. Consider refactoring existing code
via https://github.com/skovhus/jest-codemods.

This library exports a few SinonJS mock helpers. Generally speaking, in a codebase that isn't
using Jest mocks, you should be using these and not the `sinon` package directly.

### `useSinonSandbox()`

Call this in a `describe` block to create a SinonJS sandbox (which is restored automatically after
each test). It returns this sandbox.

```js
import {expect, useSinonSandbox} from 'goodeggs-test-helpers';

describe('...', () => {
  const {sandbox} = useSinonSandbox();

  it('...', () => {
    const barStub = sandbox.stub(foo, 'bar');
    /* ... */
    expect(barStub).to.have.been.calledOnce();
  });
});
```

This function also returns a helper function `stubLogger`, which allows you to mock a logger
object within this sandbox. Regardless of how many recursive `.child()` logger are created with
this mock, the returned method mocks (`info`, `warn`, etc.) will work across all children.

```js
import {expect, useSinonSandbox} from 'goodeggs-test-helpers';
import logger from '...';

describe('...', () => {
  const {stubLogger} = useSinonSandbox();

  it('...', () => {
    const {error} = stubLogger(logger);
    /* ... */
    expect(error).to.have.been.calledOnce();
  });
});
```

For convenience, and to avoid conflicting version of `sinon` in your codebase, this library
exports most of sinon's TypeScript types:
```typescript
import {
  SinonStub,
  SinonSpy,
  SinonFake,
  SinonMock,
  SinonFakeTimers,
  SinonSandbox,
  SinonStubbedInstance,
} from 'goodeggs-test-helpers';
```

It also exports a convenient utility type, which solves a common boilerplate problem:
```typescript
import {MethodStub} from 'goodeggs-test-helpers';

describe('...', () => {
  let fooBarStub: MethodStub<typeof foo.bar>;
  beforeEach(() => {
    fooBarStub = sandbox.stub(foo, 'bar');
  });
});
```

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

[MIT](LICENSE.md)
