"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var JSONWrapper = /** @class */ (function () {
    function JSONWrapper() {
        this.baseURL = 'https://jsonplaceholder.typicode.com';
    }
    JSONWrapper.prototype.getBaseURL = function () {
        return this.baseURL;
    };
    JSONWrapper.prototype.getTodoById = function (id) {
        return axios_1["default"].get(this.baseURL + "/todos/" + id)["catch"](function (e) { return e; });
    };
    JSONWrapper.prototype.getAllTodos = function () {
        return axios_1["default"].get(this.baseURL + "/todos/")["catch"](function (e) { return e; });
    };
    JSONWrapper.prototype.getPostById = function (id) {
        return axios_1["default"].get(this.baseURL + "/posts/" + id)["catch"](function (e) { return e; });
    };
    JSONWrapper.prototype.getAllPosts = function (id) {
        return axios_1["default"].get(this.baseURL + "/posts/")["catch"](function (e) { return e; });
    };
    JSONWrapper.prototype.getCommentsByPost = function (id) {
        return axios_1["default"].get(this.getBaseURL() + "/posts/" + id + "/comments")["catch"](function (e) { return e; });
    };
    JSONWrapper.prototype.createPost = function (post) {
        return axios_1["default"].post(this.getBaseURL() + "/posts/", post)["catch"](function (e) { return e; });
    };
    JSONWrapper.prototype.updatePost = function (update) {
        return axios_1["default"].put(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
    };
    JSONWrapper.prototype.patchPost = function (update) {
        return axios_1["default"].patch(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
    };
    JSONWrapper.prototype.deletePost = function (id) {
        return axios_1["default"]["delete"](this.getBaseURL() + "/posts/" + id)["catch"](function (e) { return e; });
    };
    return JSONWrapper;
}());
exports["default"] = JSONWrapper;
