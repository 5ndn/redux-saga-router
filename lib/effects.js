'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.join = exports.cancel = exports.spawn = exports.take = exports.call = undefined;

var _effects = require('redux-saga/effects');

var sagaEffects = _interopRequireWildcard(_effects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var call = sagaEffects.call,
    take = sagaEffects.take,
    spawn = sagaEffects.spawn,
    cancel = sagaEffects.cancel,
    join = sagaEffects.join;
exports.call = call;
exports.take = take;
exports.spawn = spawn;
exports.cancel = cancel;
exports.join = join;
var all = exports.all = sagaEffects.all || function (effects) {
  return effects;
};