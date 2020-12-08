(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
  typeof define === 'function' && define.amd ? define(['axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.umd = factory(global.axios));
}(this, (function (Axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Axios__default = /*#__PURE__*/_interopDefaultLegacy(Axios);

  var JSONPlaceholder = (function () {
      function JSONPlaceholder() {
          this.baseURL = 'https://jsonplaceholder.typicode.com';
      }
      JSONPlaceholder.prototype.getBaseURL = function () {
          return this.baseURL;
      };
      JSONPlaceholder.prototype.getTodoById = function (id) {
          return Axios__default['default'].get(this.baseURL + "/todos/" + id)["catch"](function (e) { return e.response; });
      };
      JSONPlaceholder.prototype.getAllTodos = function () {
          return Axios__default['default'].get(this.baseURL + "/todos/")["catch"](function (e) { return e.response; });
      };
      JSONPlaceholder.prototype.getPostById = function (id) {
          return Axios__default['default'].get(this.baseURL + "/posts/" + id)["catch"](function (e) { return e.response; });
      };
      JSONPlaceholder.prototype.getAllPosts = function (id) {
          return Axios__default['default'].get(this.baseURL + "/posts/")["catch"](function (e) { return e.response; });
      };
      JSONPlaceholder.prototype.getCommentsByPost = function (id) {
          return Axios__default['default'].get(this.getBaseURL() + "/posts/" + id + "/comments")["catch"](function (e) { return e.response; });
      };
      JSONPlaceholder.prototype.createPost = function (post) {
          return Axios__default['default'].post(this.getBaseURL() + "/posts/", post)["catch"](function (e) { return e.response; });
      };
      JSONPlaceholder.prototype.updatePost = function (update) {
          return Axios__default['default'].put(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
      };
      JSONPlaceholder.prototype.patchPost = function (update) {
          return Axios__default['default'].patch(this.getBaseURL() + "/posts", update)["catch"](function (e) { return e; });
      };
      JSONPlaceholder.prototype.deletePost = function (id) {
          return Axios__default['default']["delete"](this.getBaseURL() + "/posts/" + id)["catch"](function (e) { return e; });
      };
      return JSONPlaceholder;
  }());

  var FreeApiWrapper = {
      JSONPlaceholder: JSONPlaceholder
  };

  return FreeApiWrapper;

})));
