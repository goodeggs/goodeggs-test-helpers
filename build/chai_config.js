'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _chaid = require('chaid');

var _chaid2 = _interopRequireDefault(_chaid);

var _dirtyChai = require('dirty-chai');

var _dirtyChai2 = _interopRequireDefault(_dirtyChai);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _chaiDatetime = require('chai-datetime');

var _chaiDatetime2 = _interopRequireDefault(_chaiDatetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_dirtyChai2.default);
_chai2.default.use(_sinonChai2.default);
_chai2.default.use(_chaid2.default);
_chai2.default.use(_chaiDatetime2.default);