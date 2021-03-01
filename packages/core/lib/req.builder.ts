import axios, { AxiosResponse } from 'axios';
import Axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosStatic,
  Method,
} from 'axios';

export class RequestFactory {
  private Req: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    this.Req = axios.create(config);
  }

  setInstance(instance: AxiosInstance): RequestFactory {
    this.Req = instance;
    return this;
  }

  public setBaseURL(url: string): RequestFactory {
    this.Req.defaults.baseURL = url;
    return this;
  }

  public setDefaults(defaults: AxiosRequestConfig): RequestFactory {
    this.Req.defaults = { ...defaults };
    return this;
  }

  public setRequestInterceptor(
    func: (config: AxiosRequestConfig) => AxiosRequestConfig,
  ): RequestFactory {
    this.Req.interceptors.request.use(func);
    return this;
  }

  public setResponseInterceptor(
    func: (res: AxiosResponse) => AxiosResponse,
  ): RequestFactory {
    this.Req.interceptors.response.use(func);
    return this;
  }

  public create(config: AxiosRequestConfig = {}): RequestBuilder {
    const request = new RequestBuilder(this.Req, config);

    return request;
  }
}

export class RequestBuilder {
  private Req: AxiosInstance;
  private request: AxiosRequestConfig;
  public urlArr: string[] = [];
  constructor(
    Req: AxiosInstance = Axios,
    config: AxiosRequestConfig = {},
  ) {
    this.Req = Req;
    this.urlArr = config.url ? [config.url] : [];
    this.request = { ...config };
  }

  public get config(): AxiosRequestConfig {
    return { ...this.request };
  }

  public setReq = (Req: AxiosInstance) => {
    this.Req = Req;
    return this;
  };

  public setURL = (url: string) => {
    this.urlArr = [url];
    return this;
  };

  public extendURL = (urlSegment: string) => {
    this.urlArr.push(urlSegment);
    return this;
  };

  public setParams = (params: any): RequestBuilder => {
    this.request.params = { ...params };
    return this;
  };

  public addParams = (params: any): RequestBuilder => {
    this.request.params = { ...this.request.params, ...params };
    return this;
  };

  public setPayload = (payload: any): RequestBuilder => {
    this.request.data = { ...payload };
    return this;
  };

  public setMethod = (method: Method): RequestBuilder => {
    this.request = {
      ...this.request,
      method,
    };
    return this;
  };

  public build = () => {
    const url = encodeURI(this.urlArr.join(''));
    this.request = { ...this.request, url };
    // would be a good place to add some validation logic here to make sure
    return this;
  };

  public send = (): AxiosPromise | AxiosResponse => {
    return this.Req(this.request).catch((e) => e.response);
  };

  public printVersion = (): void => {
    console.log('version V1.1.1');
  };

  public getReqObject = () => {
    return this.request;
  };
}

export default RequestBuilder;
