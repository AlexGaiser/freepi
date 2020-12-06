var iife = (function (axios) {
	'use strict';

	axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var jsonWrapper = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	var JSONWrapper = /** @class */ (function () {
	    function JSONWrapper() {
	        this.baseURL = 'https://jsonplaceholder.typicode.com';
	    }
	    JSONWrapper.prototype.getBaseURL = function () {
	        return this.baseURL;
	    };
	    JSONWrapper.prototype.getTodoById = function (id) {
	        return axios["default"].get(this.baseURL + "/todos/" + id)["catch"](function (e) { return e; });
	    };
	    JSONWrapper.prototype.getAllTodos = function () {
	        return axios["default"].get(this.baseURL + "/todos/")["catch"](function (e) { return e; });
	    };
	    JSONWrapper.prototype.getPostById = function (id) {
	        return axios["default"].get(this.baseURL + "/posts/" + id)["catch"](function (e) { return e; });
	    };
	    JSONWrapper.prototype.getAllPosts = function (id) {
	        return axios["default"].get(this.baseURL + "/posts/")["catch"](function (e) { return e; });
	    };
	    JSONWrapper.prototype.getCommentsByPost = function (id) {
	        return axios["default"].get(this.getBaseURL() + "/posts/" + id + "/comments")["catch"](function (e) { return e; });
	    };
	    JSONWrapper.prototype.createPost = function (post) {
	        return axios["default"].post(this.getBaseURL() + "/posts/", post)["catch"](function (e) { return e; });
	    };
	    JSONWrapper.prototype.updatePost = function (update) {
	        return axios["default"].put(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
	    };
	    JSONWrapper.prototype.patchPost = function (update) {
	        return axios["default"].patch(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
	    };
	    JSONWrapper.prototype.deletePost = function (id) {
	        return axios["default"]["delete"](this.getBaseURL() + "/posts/" + id)["catch"](function (e) { return e; });
	    };
	    return JSONWrapper;
	}());
	exports["default"] = JSONWrapper;
	});

	unwrapExports(jsonWrapper);

	var freeApiWrap = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	var FreeApiWrapper = {
	    JSONWrapper: jsonWrapper["default"]
	};
	exports["default"] = FreeApiWrapper;
	});

	var index = unwrapExports(freeApiWrap);

	return index;

}(axios));
