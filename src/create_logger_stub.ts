// `goodeggs-server/logger`-compatible interface
export type Logger = {
  child(opts: {[key: string]: unknown}): Logger;
  debug(...params: Array<unknown>): void;
  error(...params: Array<unknown>): void;
  fatal(...params: Array<unknown>): void;
  info(...params: Array<unknown>): void;
  trace(...params: Array<unknown>): void;
  warn(...params: Array<unknown>): void;
};

/**
 * Creates a goodeggs-server/Logger-compatible stub.
 */
const stubLogger = (overrides?: Partial<Logger>): Logger => {
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

export default stubLogger;
