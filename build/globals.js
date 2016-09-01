'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// semantic proxy. includes subs like `skip`.
/* eslint-env goodeggs/server-side-test */

var givenDescription = function givenDescription(description) {
  return 'given ' + description;
};
GLOBAL.given = function given(description, callback) {
  return describe(givenDescription(description), callback);
};
Object.keys(describe).forEach(function (attr) {
  GLOBAL.given[attr] = function given(description, callback) {
    return describe[attr](givenDescription(description), callback);
  };
});

GLOBAL.withContext = function (attribute, promiseFn) {
  return beforeEach('setting context ' + attribute, function () {
    var promise = promiseFn;
    if (_lodash2.default.isFunction(promiseFn)) promise = promiseFn.call(this);

    return _bluebird2.default.resolve(promise).bind(this).then(function (result) {
      this[attribute] = result;
    });
  });
};

GLOBAL.expect = _chai2.default.expect;
GLOBAL.sinon = _sinon2.default;