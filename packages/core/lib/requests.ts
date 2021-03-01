import Axios, {
  AxiosRequestConfig,
  AxiosPromise,
  AxiosInstance,
} from 'axios';

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

export const customReqInit = (config: AxiosRequestConfig = {}) => {
  const Req = Axios.create(config);
  const setInterceptor = (
    interceptorConfig: AxiosRequestConfig,
  ): void => {
    Req.interceptors.request.use(function (config) {
      return { ...config, ...interceptorConfig };
    });
  };

  const request = <T>(
    config: AxiosRequestConfig,
  ): AxiosPromise<T> => {
    return Req(config).catch((e) => e.response);
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

  const get = <T>(
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
    get,
    post,
    request,
  };
};

export const requests = {
  get,
  post,
  request,
};

export default requests;
