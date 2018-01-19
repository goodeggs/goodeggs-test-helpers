/* eslint-env goodeggs/server-side-test */

import assert from 'assert';
import chai from 'chai';
import sinon from 'sinon';

beforeEach('set assert', function () {
  this.assert = assert;
});

beforeEach('set expect', function () {
  this.expect = chai.expect;
});

beforeEach('set up a sinon sandbox', function () {
  this.sinon = sinon.sandbox.create({
    injectInto: this,
    properties: ['spy', 'stub', 'mock'],
    useFakeTimers: false,
    useFakeServer: false,
  });

  const clock = this.clock = this.sinon.useFakeTimers({
    now: 0,
    toFake: ['Date'],
  });

  this.stubTime = function stubTime (date) {
    clock.setSystemTime(date);
    return date;
  };
});

afterEach('restore the sinon sandbox', function () {
  this.clock.restore();
  this.sinon.restore();
});

process.nextTick(() => delete require.cache[require.resolve(__filename)]); // eslint-disable-line
