// `goodeggs-server/logger`-compatible interface
// Since this is a public module and goodeggs-logger is private, we can't reference its type.
// Instead, limit this type to the minimum that this library actually needs to know.
export interface Logger {
  child(...params: unknown[]): Logger;
  debug(...params: unknown[]): void;
  error(...params: unknown[]): void;
  fatal(...params: unknown[]): void;
  info(...params: unknown[]): void;
  trace(...params: unknown[]): void;
  warn(...params: unknown[]): void;
}

/**
 * Creates a goodeggs-server/Logger-compatible stub.
 */
const createLoggerStub = (overrides?: Partial<Logger>): Logger => {
  const logger: Logger = {
    child: (() => logger) as Logger['child'],
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

export default createLoggerStub;
