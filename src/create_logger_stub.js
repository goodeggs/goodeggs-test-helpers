// @flow
// `goodeggs-server/logger`-compatible interface
type Logger = {
  child (opts: Object): Logger;
  debug (...params: Array<any>): void;
  error (...params: Array<any>): void;
  fatal (...params: Array<any>): void;
  info (...params: Array<any>): void;
  trace (...params: Array<any>): void;
  warn (...params: Array<any>): void;
};

/**
 * Creates a goodeggs-server/Logger-compatible stub.
 */
const stubLogger = (overrides?: $Rest<Logger, {}>): Logger => {
  const logger: Logger = {
    child: (() => logger: $PropertyType<Logger, 'child'>),
    debug: () => {},
    error: () => {},
    fatal: () => {},
    info: () => {},
    trace: () => {},
    warn: () => {},

    ...overrides,
  };
  return logger;
};

export default stubLogger;
