import sinon, {SinonStub, SinonSandbox} from 'sinon';
import assert from 'assert';

import {Logger} from './create_logger_stub';

// Re-export these so that consumers don't need to install @types/sinon and this helper stays well
// encapsulated.
export {
  SinonStub,
  SinonSpy,
  SinonFake,
  SinonMock,
  SinonFakeTimers,
  SinonSandbox,
  SinonStubbedInstance,
} from 'sinon';

/**
 * @description useful type when we need to share stubbed methods in our tests
 */
export type MethodStub<T extends (...args: unknown[]) => unknown> = SinonStub<
  Parameters<T>,
  ReturnType<T>
>;

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
 */
export default function useSinonSandbox(): {
  sandbox: SinonSandbox;
  stubLogger: (logger: Logger) => StubLoggerReturn;
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
