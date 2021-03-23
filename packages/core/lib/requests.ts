import Axios, {
  AxiosRequestConfig,
  AxiosPromise,
  AxiosInstance,
} from 'axios';
import { RequestLib } from './models/types';

export const customRequest = (Req: AxiosInstance = Axios) => <T>(
  config: AxiosRequestConfig,
): AxiosPromise<T> => {
  return Req(config).catch((e) => e.response);
};

export const request = customRequest(Axios);

export const post = <T>(
  url: string,
  params: AxiosRequestConfig,
): AxiosPromise<T> => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url,
    ...params,
  };
  return request<T>(config);
};

export const put = <T>(
  url: string,
  params: AxiosRequestConfig,
): AxiosPromise<T> => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url,
    ...params,
  };
  return request<T>(config);
};

export const get = <T>(
  url: string,
  params?: AxiosRequestConfig,
): AxiosPromise<T> => {
  const config: AxiosRequestConfig = {
    method: 'get',
    url,
    ...params,
  };
  return request<T>(config);
};

export const del = <T>(
  url: string,
  params: AxiosRequestConfig,
): AxiosPromise<T> => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url,
    ...params,
  };
  return request<T>(config);
};

export const customReqInit = (
  config: AxiosRequestConfig = {},
): RequestLib => {
  const Req = Axios.create(config);
  const setInterceptor = (
    interceptorConfig: AxiosRequestConfig,
  ): void => {
    Req.interceptors.request.use(function (config) {
      return { ...config, ...interceptorConfig };
    });
  };

  const setHeaders = (headers: any = {}): void => {
    Req.interceptors.request.use(function (config) {
      return { ...config, headers };
    });
  };

  const request = <T>(
    config: AxiosRequestConfig,
  ): AxiosPromise<T> => {
    return Req(config).catch((e) => e.response);
  };

  const put = <T>(
    url: string,
    params: AxiosRequestConfig,
  ): AxiosPromise<T> => {
    const config: AxiosRequestConfig = {
      method: 'post',
      url,
      ...params,
    };
    return request<T>(config);
  };

  const del = <T>(
    url: string,
    params: AxiosRequestConfig,
  ): AxiosPromise<T> => {
    const config: AxiosRequestConfig = {
      method: 'post',
      url,
      ...params,
    };
    return request<T>(config);
  };

  const post = <T>(
    url: string,
    params: AxiosRequestConfig,
  ): AxiosPromise<T> => {
    const config: AxiosRequestConfig = {
      method: 'post',
      url,
      ...params,
    };
    return request<T>(config);
  };

  const get = <T = any>(
    url: string,
    params?: AxiosRequestConfig,
  ): AxiosPromise<T> => {
    const config: AxiosRequestConfig = {
      method: 'get',
      url,
      ...params,
    };
    return request<T>(config);
  };

  return {
    setInterceptor,
    setHeaders,
    get,
    post,
    put,
    del,
    request,
  };
};

export const requests: RequestLib = {
  get,
  post,
  put,
  del,
  request,
  customReqInit,
};

export default requests;
