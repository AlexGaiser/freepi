"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var requests_1 = require("../../services/requests");
var get = requests_1["default"].get, post = requests_1["default"].post;
var JSONPlaceholder = /** @class */ (function () {
    function JSONPlaceholder() {
        this.baseURL = 'https://jsonplaceholder.typicode.com';
    }
    JSONPlaceholder.prototype.getBaseURL = function () {
        return this.baseURL;
    };
    JSONPlaceholder.prototype.getTodoById = function (id) {
        return get(this.baseURL + "/todos/" + id);
    };
    JSONPlaceholder.prototype.getAllTodos = function () {
        return get(this.baseURL + "/todos/");
    };
    JSONPlaceholder.prototype.getPostById = function (id) {
        return get(this.baseURL + "/posts/" + id);
    };
    JSONPlaceholder.prototype.getAllPosts = function (id) {
        return get(this.baseURL + "/posts/");
    };
    JSONPlaceholder.prototype.getCommentsByPost = function (id) {
        return get(this.getBaseURL() + "/posts/" + id + "/comments")["catch"](function (e) { return e.response; });
    };
    JSONPlaceholder.prototype.createPost = function (data) {
        return post(this.getBaseURL() + "/posts/", { data: data });
    };
    JSONPlaceholder.prototype.updatePost = function (update) {
        return axios_1["default"].put(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e.response; });
    };
    JSONPlaceholder.prototype.patchPost = function (update) {
        return axios_1["default"].patch(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
    };
    JSONPlaceholder.prototype.deletePost = function (id) {
        return axios_1["default"]["delete"](this.getBaseURL() + "/posts/" + id)["catch"](function (e) { return e; });
    };
    return JSONPlaceholder;
}());
exports["default"] = JSONPlaceholder;
