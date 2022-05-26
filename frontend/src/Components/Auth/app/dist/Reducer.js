"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Reducer = void 0;
var initialState = {
    errors: []
};
exports.Reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "RESET_ERRORS": {
            return __assign(__assign({}, state), { errors: [] });
        }
        case "INVALID_EMAIL": {
            return __assign(__assign({}, state), { errors: __spreadArrays(state.errors, [action.type]) });
        }
        case "EMPTY_EMAIL": {
            console.log("empty email case");
            return __assign(__assign({}, state), { errors: __spreadArrays(state.errors, [action.type]) });
        }
        case "EMPTY_PASS": {
            return __assign(__assign({}, state), { errors: __spreadArrays(state.errors, [action.type]) });
        }
        case "EMPTY_CONFIRM_PASS": {
            return __assign(__assign({}, state), { errors: __spreadArrays(state.errors, [action.type]) });
        }
        case "PASS_LENGTH": {
            return __assign(__assign({}, state), { errors: __spreadArrays(state.errors, [action.type]) });
        }
        case "PASS_DO_NOT_MATCH": {
            return __assign(__assign({}, state), { errors: __spreadArrays(state.errors, [action.type]) });
        }
        default: {
            return state;
        }
    }
};
