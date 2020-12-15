import { get } from "../../../services/requests"

export const getById = <T>(path:string) => (baseURL:string) => (id:number | string) => {
  return get<T>(`${baseURL}${path}/${id}`)
}

export const findAll =<T> (path:string) => (baseURL:string) =>  ()=>{
  return get<T[]>(`${baseURL}${path}/`)
}

export const find = <T>(path:string) => (baseURL:string)=> (params)=> {
  return get<T[]>(`${baseURL}${path}`, {params})
}

export const getBaseFunctions= <T>(path) =>(baseURL)=> {
  return {
    find:find<T>(path)(baseURL),
    findAll: findAll<T>(path)(baseURL),
    getById: getById<T>(path)(baseURL)
  }
}