// TODO(ndhoule): Replace with a better type
interface Rollbar {
  configure: (...args: unknown[]) => unknown;
  critical: (...args: unknown[]) => unknown;
  error: (...args: unknown[]) => unknown;
  warning: (...args: unknown[]) => unknown;
  info: (...args: unknown[]) => unknown;
  debug: (...args: unknown[]) => unknown;
}

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
