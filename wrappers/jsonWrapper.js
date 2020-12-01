"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var JSONWrapper = /** @class */ (function () {
    function JSONWrapper() {
        this.baseURL = 'https://jsonplaceholder.typicode.com';
    }
    JSONWrapper.prototype.getTodos = function (todoIndex) {
        return axios_1["default"].get(this.baseURL + "/todos/" + todoIndex);
    };
    return JSONWrapper;
}());
exports["default"] = JSONWrapper;
