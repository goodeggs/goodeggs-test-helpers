// @flow
/* eslint-env goodeggs/server-side-test */
import sinon from 'sinon';
import assert from 'assert';

export default function useSinonSandbox () {
  beforeEach('use sinon sandbox', function () {
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
      assert(date != null, 'date required');
      clock.setSystemTime(date);
      return date;
    };

    this.stubLogger = function ({logger} = {}) {
      assert(logger != null, 'logger required');
      this.stub(logger, 'trace');
      this.stub(logger, 'debug');
      this.stub(logger, 'info');
      this.stub(logger, 'warn');
      this.stub(logger, 'error');
      this.stub(logger, 'fatal');
      this.stub(logger, 'child').returns(logger);
    }.bind(this);
  });

  afterEach('restore sinon sandbox', function () {
    this.clock.restore();
    this.sinon.restore();
  });
}
