// @flow
// TODO(ndhoule): Replace with a better type
type Analytics = {
  alias: Function,
  group: Function,
  identify: Function,
  page: Function,
  screen: Function,
  track: Function,
};

/**
 * Creates an analytics.js (window.analytics)-compatible stub.
 */
const createAnalyticsStub = (overrides?: $Rest<Analytics, {}>): Analytics => ({
  alias: () => {},
  group: () => {},
  identify: () => {},
  page: () => {},
  screen: () => {},
  track: () => {},

  ...overrides,
});

export default createAnalyticsStub;
