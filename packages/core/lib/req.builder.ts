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

  public setDefaults(defaults: AxiosRequestConfig) {
    this.Req.defaults = { ...defaults };
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

  public create(path?: string): RequestBuilder {
    const request = new RequestBuilder(this.Req);
    request.extendPath(path);

    return request;
  }
}

export class RequestBuilder {
  private Req: AxiosInstance;
  private request: AxiosRequestConfig;
  public urlArr: string[] = [];
  constructor(Req: AxiosInstance = Axios) {
    this.Req = Req;
  }

  public setReq = (Req: AxiosInstance) => {
    this.Req = Req;
    return this;
  };

  public setUrl = (url: string) => {
    this.urlArr = [url];
    return this;
  };

  public extendPath = (urlSegment: string) => {
    this.urlArr.push('/' + urlSegment);
  };

  public extendURL = (urlSegment: string) => {
    this.urlArr.push(urlSegment);
    return this;
  };

  public setReqMethod = (method: Method) => {
    this.request = {
      ...this.request,
      method,
    };
    return this;
  };

  public buildRequest = () => {
    const url = encodeURI(this.urlArr.join(''));
    this.request = { ...this.request, url };
    // would be a good place to add some validation logic here to make sure
    return this;
  };

  public sendRequest = (): AxiosPromise => {
    console.log(this.request);
    return this.Req(this.request);
  };

  public printVersion = (): void => {
    console.log('version V1.1.1');
  };

  public getReqObject = () => {
    return this.request;
  };
}

export default RequestBuilder;
