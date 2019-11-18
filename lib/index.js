'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = exports.createHasHistory = exports.createBrowserHistory = undefined;

var _history = require('history');

Object.defineProperty(exports, 'createBrowserHistory', {
  enumerable: true,
  get: function get() {
    return _history.createBrowserHistory;
  }
});
Object.defineProperty(exports, 'createHasHistory', {
  enumerable: true,
  get: function get() {
    return _history.createHasHistory;
  }
});

var _router2 = require('./router');

var _router3 = _interopRequireDefault(_router2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.router = _router3.default;