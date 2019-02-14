// @flow
import sinon from 'sinon';
import assert from 'assert';

/**
 * Create a Sinon sandbox that resets itself between each test. Also returns a goodeggs-logger stub
 * that is stubbed using the returned sandbox.
 *
 * NOTE: Only use this in a Mocha environment, it's not guaranteed to work in Jest.
 */
export default function useSinonSandbox() {
  const sandbox = sinon.createSandbox();

  const stubLogger = (logger: Object) => {
    assert(logger != null, 'logger required');
    sandbox.stub(logger, 'trace');
    sandbox.stub(logger, 'debug');
    sandbox.stub(logger, 'info');
    sandbox.stub(logger, 'warn');
    sandbox.stub(logger, 'error');
    sandbox.stub(logger, 'fatal');
    sandbox.stub(logger, 'child').returns(logger);
  };

  // $FlowFixMe(ndhoule): Flow doesn't know it, but this is defined.
  afterEach(function() {
    sandbox.restore();
  });

  return {sandbox, stubLogger};
}
