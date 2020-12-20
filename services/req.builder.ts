import Axios, { AxiosPromise, AxiosRequestConfig, Method } from "axios";

class RequestBuilder {
  private baseURL:string;
  private request: AxiosRequestConfig;
  private urlArr:string[]

  constructor(baseURL:string) {
    this.baseURL = baseURL
    this.urlArr = [baseURL]
  }

  public setReqUrl = (url:string) => {
    this.urlArr = [url]
    return this
  }
  
  public extendURL = (urlSegment:string) =>{
    this.urlArr.push(urlSegment)
    return this
  }

  public setReqMethod = (method:Method) => {
    this.request =
    {
      ...this.request,
      method
    }
    return this;
  }

  public buildRequest = () => {
    const url = encodeURI(this.urlArr.join(''))
    this.request = {...this.request, url}
    // would be a good place to add some validation logic here to make sure 
    return this;
  }

  public sendRequest = ():AxiosPromise=>{
    return Axios(this.request);
  }

  public getReqObject = () =>{
    return this.request;
  }
}

export default RequestBuilder;
