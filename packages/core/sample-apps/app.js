"use strict";
exports.__esModule = true;
var req_builder_1 = require("../lib/req.builder");
var jpFactory = new req_builder_1.RequestFactory({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
// jpFactory.setRequestInterceptor((config) => {
//   return { ...config, headers: 'Authorization test' };
// });
// jpFactory.setRequestInterceptor((config) => {
//   const ext = '/posts';
//   const url = config.url + ext;
//   return { ...config, url };
// });
var req = jpFactory.create('posts/1');
req.buildRequest().sendRequest();
