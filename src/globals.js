/* eslint-env goodeggs/server-side-test */

import chai from 'chai';
import isFunction from 'lodash.isfunction';
import sinon from 'sinon';

import globalVar from './global';

// semantic proxy. includes subs like `skip`.
const givenDescription = (description) => `given ${description}`;
globalVar.given = function given (description, callback) {
  return describe(givenDescription(description), callback);
};
Object.keys(describe).forEach(function (attr) {
  globalVar.given[attr] = function given (description, callback) {
    return describe[attr](givenDescription(description), callback);
  };
});

globalVar.withContext = function (attribute, promiseFn) {
  return beforeEach(`setting context ${attribute}`, function () {
    let promise = promiseFn;
    if (isFunction(promiseFn)) promise = promiseFn.call(this); // eslint-disable-line

    const context = this;

    return Promise.resolve(promise)
      .then(function (result) {
        context[attribute] = result;
      });
  });
};

globalVar.expect = chai.expect;
globalVar.sinon = sinon;
