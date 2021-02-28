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
exports.RequestBuilder = exports.RequestFactory = void 0;
var axios_1 = require("axios");
var axios_2 = require("axios");
var RequestFactory = /** @class */ (function () {
    function RequestFactory(config) {
        if (config === void 0) { config = {}; }
        this.Req = axios_1["default"].create(config);
    }
    RequestFactory.prototype.setInstance = function (instance) {
        this.Req = instance;
        return this;
    };
    RequestFactory.prototype.setBaseURL = function (url) {
        this.Req.defaults.baseURL = url;
        return this;
    };
    RequestFactory.prototype.setDefaults = function (defaults) {
        this.Req.defaults = __assign({}, defaults);
    };
    RequestFactory.prototype.setRequestInterceptor = function (func) {
        this.Req.interceptors.request.use(func);
        return this;
    };
    RequestFactory.prototype.setResponseInterceptor = function (func) {
        this.Req.interceptors.response.use(func);
        return this;
    };
    RequestFactory.prototype.create = function (path) {
        var request = new RequestBuilder(this.Req);
        request.extendPath(path);
        return request;
    };
    return RequestFactory;
}());
exports.RequestFactory = RequestFactory;
var RequestBuilder = /** @class */ (function () {
    function RequestBuilder(Req) {
        var _this = this;
        if (Req === void 0) { Req = axios_2["default"]; }
        this.urlArr = [];
        this.setReq = function (Req) {
            _this.Req = Req;
            return _this;
        };
        this.setUrl = function (url) {
            _this.urlArr = [url];
            return _this;
        };
        this.extendPath = function (urlSegment) {
            _this.urlArr.push('/' + urlSegment);
        };
        this.extendURL = function (urlSegment) {
            _this.urlArr.push(urlSegment);
            return _this;
        };
        this.setReqMethod = function (method) {
            _this.request = __assign(__assign({}, _this.request), { method: method });
            return _this;
        };
        this.buildRequest = function () {
            var url = encodeURI(_this.urlArr.join(''));
            _this.request = __assign(__assign({}, _this.request), { url: url });
            // would be a good place to add some validation logic here to make sure
            return _this;
        };
        this.sendRequest = function () {
            console.log(_this.request);
            return _this.Req(_this.request);
        };
        this.printVersion = function () {
            console.log('version V1.1.1');
        };
        this.getReqObject = function () {
            return _this.request;
        };
        this.Req = Req;
    }
    return RequestBuilder;
}());
exports.RequestBuilder = RequestBuilder;
exports["default"] = RequestBuilder;
