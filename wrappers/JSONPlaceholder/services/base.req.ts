import { AxiosRequestConfig } from "axios"
import { get, post } from "../../../services/requests"


export const getById = <T>(path:string) => (baseURL:string) => (id:number | string) => {
  return get<T>(`${baseURL}${path}/${id}`)
}

export const findNested = <T>(path:string) => (baseURL:string) => (nestedPaths:string[], params) =>{
  const pathString = nestedPaths;
}

export const findAll =<T> (path:string) => (baseURL:string) =>  ()=>{
  return get<T[]>(`${baseURL}${path}/`)
}

export const find = <T>(path:string) => (baseURL:string)=> (params)=> {
  return get<T[]>(`${baseURL}${path}`, {params})
}

export const create = <T>(path:string) => (baseURL:string)=> (data) => {
  return post<T>(`${baseURL}${path}`, {data})
}

export const createNested = <T>(path:string) => (baseURL:string) => (nestedPath:string) => (id:number | string, data)  => {
  return post<T>(`${baseURL}${path}/${id}${nestedPath}`, {data});
}

export const getBaseFunctions= <T>(path:string) =>({url}:AxiosRequestConfig) => {
  return {
    find:find<T>(path)(url),
    findAll: findAll<T>(path)(url),
    getById: getById<T>(path)(url),
    create: create<T>(path)(url),
  }
}