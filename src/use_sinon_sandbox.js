// @flow
/* eslint-env goodeggs/server-side-test */
import sinon from 'sinon';
import assert from 'assert';

export default function useSinonSandbox () {
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

  afterEach('restore sinon sandbox', function () {
    sandbox.restore();
  });

  return {sandbox, stubLogger};
}
