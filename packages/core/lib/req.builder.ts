import Axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosStatic,
  Method,
} from 'axios';

class RequestBuilder {
  private baseURL: string;
  private request: AxiosRequestConfig;
  private urlArr: string[];
  private Req: AxiosInstance;

  constructor(baseURL: string, Req: AxiosInstance = Axios) {
    this.baseURL = baseURL;
    this.urlArr = [baseURL];
    this.Req = Req;
  }

  public setReq = (Req: AxiosInstance) => {
    this.Req = Req;
    return this;
  };

  public setReqUrl = (url: string) => {
    this.urlArr = [url];
    return this;
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
