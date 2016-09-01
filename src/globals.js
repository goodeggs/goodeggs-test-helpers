/* eslint-env goodeggs/server-side-test */

import Promise from 'bluebird';
import chai from 'chai';
import isFunction from 'lodash.isfunction';
import sinon from 'sinon';

// semantic proxy. includes subs like `skip`.
const givenDescription = (description) => `given ${description}`;
GLOBAL.given = function given (description, callback) {
  return describe(givenDescription(description), callback);
};
Object.keys(describe).forEach(function (attr) {
  GLOBAL.given[attr] = function given (description, callback) {
    return describe[attr](givenDescription(description), callback);
  };
});

GLOBAL.withContext = function (attribute, promiseFn) {
  return beforeEach(`setting context ${attribute}`, function () {
    let promise = promiseFn;
    if (isFunction(promiseFn)) promise = promiseFn.call(this); // eslint-disable-line

    return Promise.resolve(promise)
      .bind(this)
      .then(function (result) {
        this[attribute] = result;
      });
  });
};

GLOBAL.expect = chai.expect;
GLOBAL.sinon = sinon;
