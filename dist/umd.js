(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
	typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
	(factory((global.umd = {}),global.axios));
}(this, (function (exports,axios) { 'use strict';

	axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var requests_1 = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
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

	var request = function (config) {
	    return axios["default"](config)["catch"](function (e) { return e.response; });
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
	});

	unwrapExports(requests_1);

	var JSONPlaceholder_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;


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
	        return axios["default"].put(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e.response; });
	    };
	    JSONPlaceholder.prototype.patchPost = function (update) {
	        return axios["default"].patch(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
	    };
	    JSONPlaceholder.prototype.deletePost = function (id) {
	        return axios["default"]["delete"](this.getBaseURL() + "/posts/" + id)["catch"](function (e) { return e; });
	    };
	    return JSONPlaceholder;
	}());
	exports["default"] = JSONPlaceholder;
	});

	var JSONPlaceholder = unwrapExports(JSONPlaceholder_1);

	const freepi = {
	  JSONPlaceholder
	};

	exports.JSONPlaceholder = JSONPlaceholder;
	exports.default = freepi;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
