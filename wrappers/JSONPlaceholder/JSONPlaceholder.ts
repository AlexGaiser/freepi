import Axios, { AxiosResponse } from "axios";
import requests from "../../services/requests";
import { Post } from "./models/Post";
import { Todo } from "./models/Todo";

const {get, post} = requests;
class JSONPlaceholder {
  private baseURL:string;
  
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com'
  }

  public getBaseURL (){
    return this.baseURL;
  }

  public getTodoById(id:number):Promise<AxiosResponse> {
    return get<Todo>(`${this.baseURL}/todos/${id}`)
  }

  public getAllTodos():Promise<AxiosResponse<Todo[]>> {
    return get<Todo[]>(`${this.baseURL}/todos/`)
  }

  
  public getPostById(id:number):Promise<AxiosResponse<Post>> {
    return get<Post>(`${this.baseURL}/posts/${id}`)
  }

  public getAllPosts(id:number):Promise<AxiosResponse<Post[]>> {
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


}

export default JSONPlaceholder