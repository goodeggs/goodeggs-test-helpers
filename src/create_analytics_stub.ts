interface Analytics {
  alias(args: {previousId: string; userId: string}): void;
  group(args: {groupId: string; traits?: Record<string, unknown>}): void;
  identify(args: {userId: string; traits?: Record<string, unknown>}): void;
  page(args: {name: string; properties?: Record<string, unknown>}): void;
  screen(args: {name: string; properties?: Record<string, unknown>}): void;
  track(args: {event: string; properties?: Record<string, unknown>}): void;
}

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
