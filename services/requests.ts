import Axios, { AxiosRequestConfig, AxiosPromise } from "axios"
import { pipe } from "./utils.service";

export const request = <T>(config:AxiosRequestConfig):AxiosPromise<T>=>{
  config.url = encodeURI(config.url)

  return Axios(config).catch(e=>e.response);
}

export const post = <T>(url:string, params:AxiosRequestConfig):AxiosPromise<T> => {
  const config:AxiosRequestConfig  = {
    method:'post',
    url,
    ...params
  }
  return request<T>(config);
}

export const get = <T>(url:string, params?:AxiosRequestConfig):AxiosPromise<T> => {
  const config:AxiosRequestConfig  = {
    method:'get',
    url,
    ...params
  }
  return request<T>(config)
}

// for the request builder we will need the following:

// set url
// set method
// set headers
// set params
// set data
// extend url
// extend params
// extend data
// extend headers
// set property
// extend property

export const setReqProperty  =  (property:string)=> (value) => (request:AxiosRequestConfig):AxiosRequestConfig =>{
  const newProperty = {property: value}
  
  return {
    ...request,
    ...newProperty
  }
}

export const setReqUrl = (url:string)=> (request:AxiosRequestConfig):AxiosRequestConfig => {
  const req: AxiosRequestConfig =
  {
    ...request,
    url
  }
  return req
}

export const setReqMethod = (method:string) => (request):AxiosRequestConfig => {
  const req: AxiosRequestConfig =
  {
    ...request,
    method
  }
  return req
}

export const buildRequest = (...fns) => (request:AxiosRequestConfig):AxiosRequestConfig=> {
  return pipe(...fns)(request)
}

const requests = {
  post,
  get,
}

export default requests