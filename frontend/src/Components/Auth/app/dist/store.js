"use strict";
exports.__esModule = true;
exports.store = void 0;
var redux_1 = require("redux");
var Reducer_1 = require("./Reducer");
exports.store = redux_1.createStore(Reducer_1.Reducer);
