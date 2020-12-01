(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
	typeof define === 'function' && define.amd ? define(['axios'], factory) :
	(global.index = factory(global.axios));
}(this, (function (axios) { 'use strict';

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
	    JSONWrapper.prototype.getTodos = function (todoIndex) {
	        return axios["default"].get(this.baseURL + "/todos/" + todoIndex);
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

})));
