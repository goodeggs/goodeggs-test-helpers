import sinon, {SinonStub, SinonSandbox} from 'sinon';
import assert from 'assert';

import {Logger} from './create_logger_stub';

interface StubLoggerReturn {
  trace: SinonStub;
  debug: SinonStub;
  info: SinonStub;
  warn: SinonStub;
  error: SinonStub;
  fatal: SinonStub;
  child: SinonStub;
}

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

  const stubLogger = (logger: Logger): StubLoggerReturn => {
    assert(logger != null, 'logger required');

    const trace = sandbox.stub(logger, 'trace');
    const debug = sandbox.stub(logger, 'debug');
    const info = sandbox.stub(logger, 'info');
    const warn = sandbox.stub(logger, 'warn');
    const error = sandbox.stub(logger, 'error');
    const fatal = sandbox.stub(logger, 'fatal');
    const child = sandbox.stub(logger, 'child').returns(logger);

    return {trace, debug, info, warn, error, fatal, child};
  };

  afterEach(function () {
    sandbox.restore();
  });

  return {sandbox, stubLogger};
}
