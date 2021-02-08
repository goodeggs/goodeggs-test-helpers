type Analytics = {
  alias(arg0: {previousId: string; userId: string}): void;
  group(arg0: {groupId: string; traits?: Record<string, unknown>}): void;
  identify(arg0: {userId: string; traits?: Record<string, unknown>}): void;
  page(arg0: {name: string; properties?: Record<string, unknown>}): void;
  screen(arg0: {name: string; properties?: Record<string, unknown>}): void;
  track(arg0: {event: string; properties?: Record<string, unknown>}): void;
};

/**
 * Creates an analytics.js (window.analytics)-compatible stub.
 */
const createAnalyticsStub = (overrides?: Partial<Analytics>): Analytics => ({
  alias: (() => {}) as Analytics['alias'],
  group: (() => {}) as Analytics['group'],
  identify: (() => {}) as Analytics['identify'],
  page: (() => {}) as Analytics['page'],
  screen: (() => {}) as Analytics['screen'],
  track: (() => {}) as Analytics['track'],

  ...overrides,
});

export default createAnalyticsStub;
