import sinon, {SinonSandbox} from 'sinon';
import assert from 'assert';

import {Logger} from './create_logger_stub';

/**
 * Create a Sinon sandbox that resets itself between each test. Also returns a goodeggs-logger stub
 * that is stubbed using the returned sandbox.
 *
 * NOTE: Only use this in a Mocha environment, it's not guaranteed to work in Jest.
 */
export default function useSinonSandbox(): {
  sandbox: SinonSandbox;
  stubLogger: (logger: Logger) => void;
} {
  const sandbox = sinon.createSandbox();

  const stubLogger = (logger: Logger) => {
    assert(logger != null, 'logger required');
    sandbox.stub(logger, 'trace');
    sandbox.stub(logger, 'debug');
    sandbox.stub(logger, 'info');
    sandbox.stub(logger, 'warn');
    sandbox.stub(logger, 'error');
    sandbox.stub(logger, 'fatal');
    sandbox.stub(logger, 'child').returns(logger);
  };

  afterEach(function () {
    sandbox.restore();
  });

  return {sandbox, stubLogger};
}
