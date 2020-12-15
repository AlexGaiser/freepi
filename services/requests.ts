import Axios, { AxiosRequestConfig, AxiosPromise } from "axios"

const request = <T>(config:AxiosRequestConfig):AxiosPromise<T>=>{
  return Axios(config)
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

const requests = {
  post,
  get,
}

export default requests