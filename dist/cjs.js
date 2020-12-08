'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Axios = _interopDefault(require('axios'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var request = function (config) {
    return Axios(config)["catch"](function (e) { return e.response; });
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
    get: get,
};

var get$1 = requests.get, post$1 = requests.post;
var JSONPlaceholder = (function () {
    function JSONPlaceholder() {
        this.baseURL = 'https://jsonplaceholder.typicode.com';
    }
    JSONPlaceholder.prototype.getBaseURL = function () {
        return this.baseURL;
    };
    JSONPlaceholder.prototype.getTodoById = function (id) {
        return get$1(this.baseURL + "/todos/" + id);
    };
    JSONPlaceholder.prototype.getAllTodos = function () {
        return get$1(this.baseURL + "/todos/");
    };
    JSONPlaceholder.prototype.getPostById = function (id) {
        return get$1(this.baseURL + "/posts/" + id);
    };
    JSONPlaceholder.prototype.getAllPosts = function (id) {
        return get$1(this.baseURL + "/posts/");
    };
    JSONPlaceholder.prototype.getCommentsByPost = function (id) {
        return get$1(this.getBaseURL() + "/posts/" + id + "/comments")["catch"](function (e) { return e.response; });
    };
    JSONPlaceholder.prototype.createPost = function (data) {
        return post$1(this.getBaseURL() + "/posts/", { data: data });
    };
    JSONPlaceholder.prototype.updatePost = function (update) {
        return Axios.put(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e.response; });
    };
    JSONPlaceholder.prototype.patchPost = function (update) {
        return Axios.patch(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
    };
    JSONPlaceholder.prototype.deletePost = function (id) {
        return Axios["delete"](this.getBaseURL() + "/posts/" + id)["catch"](function (e) { return e; });
    };
    return JSONPlaceholder;
}());

var FreePI = {
    JSONPlaceholder: JSONPlaceholder
};

module.exports = FreePI;
