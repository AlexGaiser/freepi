import Axios, { AxiosRequestConfig } from "axios"

const post = (url:string, params:AxiosRequestConfig) => {
  const config:AxiosRequestConfig  = {
    method:'post',
    url,
    ...params
  }
  return Axios(config);
}
const get = (url:string, params?:AxiosRequestConfig) => {
  const config:AxiosRequestConfig  = {
    method:'get',
    url,
    ...params
  }
  return Axios(config);
}



const requests = {
  post,
  get,
}

export default requests