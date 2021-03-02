import RequestBuilder, { RequestFactory } from './req.builder';
import requests from './requests';
import utils from './utils.service';

export { RequestBuilder, requests, utils, RequestFactory };

const core = {
  RequestBuilder,
  requests,
  RequestFactory,
  utils,
};

export default core;
