'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _geomoment = require('geomoment');

var _geomoment2 = _interopRequireDefault(_geomoment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env goodeggs/server-side-test */

beforeEach('set assert', function () {
  this.assert = _assert2.default;
});

beforeEach('set expect', function () {
  this.expect = _chai2.default.expect;
});

beforeEach('set up a sinon sandbox', function () {
  this.sinon = _sinon2.default.sandbox.create({
    injectInto: this,
    properties: ['spy', 'stub', 'mock'],
    useFakeTimers: false,
    useFakeServer: false
  });

  var clock = this.clock = this.sinon.useFakeTimers(0, 'Date');
  this.stubTime = function stubTime(time) {
    clock.setSystemTime((0, _geomoment2.default)(time).valueOf());
    return time;
  };
});

afterEach('restore the sinon sandbox', function () {
  this.clock.restore();
  this.sinon.restore();
});

process.nextTick(function () {
  return delete require.cache[require.resolve(__filename)];
}); // eslint-disable-line