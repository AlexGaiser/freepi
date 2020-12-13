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
exports.__esModule = true;
var axios_1 = require("axios");
var request = function (config) {
    return axios_1["default"](config)["catch"](function (e) { return e.response; });
};
var post = function (url, params) {
    var config = __assign({ method: 'post', url: url }, params);
    return request(config);
};
var get = function (url, params) {
    var config = __assign({ method: 'get', url: url }, params);
    return request(config);
};
var requests = {
    post: post,
    get: get
};
exports["default"] = requests;
