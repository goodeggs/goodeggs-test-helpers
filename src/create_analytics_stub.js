// @flow
type Analytics = {
  alias({previousId: string, userId: string}): void,
  group({groupId: string, traits?: {}}): void,
  identify({userId: string, traits?: {}}): void,
  page({name: string, properties?: {}}): void,
  screen({name: string, properties?: {}}): void,
  track({event: string, properties?: {}}): void,
};

/**
 * Creates an analytics.js (window.analytics)-compatible stub.
 */
const createAnalyticsStub = (overrides?: $Rest<Analytics, {}>): Analytics => ({
  alias: (() => {}: $PropertyType<Analytics, 'alias'>),
  group: (() => {}: $PropertyType<Analytics, 'group'>),
  identify: (() => {}: $PropertyType<Analytics, 'identify'>),
  page: (() => {}: $PropertyType<Analytics, 'page'>),
  screen: (() => {}: $PropertyType<Analytics, 'screen'>),
  track: (() => {}: $PropertyType<Analytics, 'track'>),

  ...overrides,
});

export default createAnalyticsStub;
