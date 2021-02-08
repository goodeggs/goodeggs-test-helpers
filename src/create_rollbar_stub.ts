// TODO(ndhoule): Replace with a better type
type Rollbar = {
  configure: (...args: Array<unknown>) => unknown;
  critical: (...args: Array<unknown>) => unknown;
  error: (...args: Array<unknown>) => unknown;
  warning: (...args: Array<unknown>) => unknown;
  info: (...args: Array<unknown>) => unknown;
  debug: (...args: Array<unknown>) => unknown;
};

/**
 * Creates a rollbar.js (window.Rollbar)-compatible stub.
 */
const createRollbarStub = (overrides?: Partial<Rollbar>): Rollbar => ({
  configure: () => {},
  critical: () => {},
  debug: () => {},
  error: () => {},
  info: () => {},
  warning: () => {},

  ...overrides,
});

export default createRollbarStub;
