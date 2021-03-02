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
    const request = new RequestBuilder({ Req: this.Req, ...config });

    return request;
  }
}

interface RequestBuilderConfig extends AxiosRequestConfig {
  Req?: AxiosInstance;
}

export class RequestBuilder {
  private Req: AxiosInstance;
  private request: AxiosRequestConfig;
  private urlArr: string[] = [];
  constructor(config: RequestBuilderConfig = {}) {
    const defaultConfig = {
      Req: Axios,
    };
    const filledConfig: RequestBuilderConfig = {
      ...defaultConfig,
      ...config,
    };

    const { Req, ...requestConfig } = filledConfig;
    this.Req = Req;
    this.urlArr = config.url ? [config.url] : [];
    this.request = { ...requestConfig };
  }

  public get config(): AxiosRequestConfig {
    return { ...this.request };
  }

  public setConfig(config: AxiosRequestConfig) {
    this.request = { ...config };
  }

  private buildURL() {
    return encodeURI(this.urlArr.join(''));
  }

  public get url(): string {
    const url = this.buildURL();
    return url;
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

  public send = <T = any>(): AxiosPromise<T> => {
    return this.Req(this.request).catch((e) => e.response);
  };
}

export default RequestBuilder;
