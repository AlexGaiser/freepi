var iife = (function (axios) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

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
	    return axios__default['default']["default"](config)["catch"](function (e) { return e.response; });
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
	        return axios__default['default']["default"].put(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e.response; });
	    };
	    JSONPlaceholder.prototype.patchPost = function (update) {
	        return axios__default['default']["default"].patch(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
	    };
	    JSONPlaceholder.prototype.deletePost = function (id) {
	        return axios__default['default']["default"]["delete"](this.getBaseURL() + "/posts/" + id)["catch"](function (e) { return e; });
	    };
	    return JSONPlaceholder;
	}());
	exports["default"] = JSONPlaceholder;
	});

	unwrapExports(JSONPlaceholder_1);

	var freeApiLibrary = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	var FreePI = {
	    JSONPlaceholder: JSONPlaceholder_1["default"]
	};
	exports["default"] = FreePI;
	});

	var index = unwrapExports(freeApiLibrary);

	return index;

}(axios));
