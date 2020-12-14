import Axios, { AxiosResponse } from "axios";
import requests from "../../services/requests";
import { Post } from "./models/Post";
import { Todo } from "./models/Todo";
import { User } from "./models/User";

const {get, post} = requests;
class JSONPlaceholder {
  private baseURL:string;
  
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com'
  }

  public getBaseURL (){
    return this.baseURL;
  }

  public findTodos(params) {
    return get<Todo[]>(`${this.getBaseURL()}/todos`, {params})
  }

  public getTodoById(id:number):Promise<AxiosResponse> {
    return get<Todo>(`${this.baseURL}/todos/${id}`)
  }

  public getAllTodos():Promise<AxiosResponse<Todo[]>> {
    return get<Todo[]>(`${this.baseURL}/todos/`)
  }

  public findPosts(params):Promise<AxiosResponse> {
    return get<Post[]>(`${this.getBaseURL()}/posts/`, {params})
  }

  public getPostById(id:number):Promise<AxiosResponse<Post>> {
    return get<Post>(`${this.baseURL}/posts/${id}`)
  }

  public getAllPosts():Promise<AxiosResponse<Post[]>> {
    return get<Post[]>(`${this.baseURL}/posts/`)
  }

  public getCommentsByPost(id:number):Promise<AxiosResponse> {
    return get<Post>(`${this.getBaseURL()}/posts/${id}/comments`).catch(e=>e.response)
  }

  public createPost(data:Post):Promise<AxiosResponse> {
    return post<Post>(`${this.getBaseURL()}/posts/`, {data});
  }

  public updatePost(update):Promise<AxiosResponse> {
    return Axios.put(`${this.getBaseURL()}/posts`, update).catch(e=>e.response)
  }

  public patchPost(update):Promise<AxiosResponse> {
    return Axios.patch(`${this.getBaseURL()}/posts`, update).catch(e=>e)
  }

  public deletePost(id:number):Promise<AxiosResponse> {
    return Axios.delete(`${this.getBaseURL()}/posts/${id}`).catch(e=>e)
  }

  public getAllUsers():Promise<AxiosResponse> {
    return get<User[]>(`${this.getBaseURL()}/users/`)
  }

  public findUsers(params):Promise<AxiosResponse> {
    return get<User[]>(`${this.getBaseURL()}/users/`, {params})
  }

  public getUserById(id:number):Promise<AxiosResponse> {
    return get<User[]>(`${this.getBaseURL()}/users/${id}`)
  }
}
export default JSONPlaceholder