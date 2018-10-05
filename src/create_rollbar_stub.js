// @flow
// TODO(ndhoule): Replace with a better type
type Rollbar = {
  configure: Function,
  critical: Function,
  error: Function,
  warning: Function,
  info: Function,
  debug: Function,
};

/**
 * Creates a rollbar.js (window.Rollbar)-compatible stub.
 */
const createRollbarStub = (overrides?: $Rest<Rollbar, {}>): Rollbar => ({
  configure: () => {},
  critical: () => {},
  debug: () => {},
  error: () => {},
  info: () => {},
  warning: () => {},

  ...overrides,
});

export default createRollbarStub;
