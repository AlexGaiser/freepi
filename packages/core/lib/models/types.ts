import {
  AxiosPromise,
  AxiosRequestConfig,
} from '@freepi/core/node_modules/axios';

export type RequestFunc = <T = any>(
  url: string,
  params?: AxiosRequestConfig,
) => AxiosPromise<T>;

export interface RequestLib {
  setInterceptor?: (interceptorConfig: AxiosRequestConfig) => void;
  setHeaders?: (headers: any) => void;
  customReqInit?: (config?: AxiosRequestConfig) => RequestLib;
  get: RequestFunc;
  post: RequestFunc;
  put: RequestFunc;
  del: RequestFunc;
  request: <T = any>(config: AxiosRequestConfig) => AxiosPromise<T>;
}
