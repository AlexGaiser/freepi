import Axios, { AxiosResponse } from "axios";
import { Post } from "./models/Post";
import { Todo } from "./models/Todo";

class JSONWrapper {
  private baseURL:string;
  
  constructor() {
    this.baseURL = 'https://jsonplaceholder.typicode.com'
  }

  public getBaseURL (){
    return this.baseURL;
  }

  public getTodoById(id:number):Promise<AxiosResponse> {
    return Axios.get(`${this.baseURL}/todos/${id}`).catch(e=>e)
  }

  public getAllTodos():Promise<AxiosResponse<Todo[]>> {
    return Axios.get(`${this.baseURL}/todos/`).catch(e=>e)
  }

  
  public getPostById(id:number):Promise<AxiosResponse<Post>> {
    return Axios.get(`${this.baseURL}/posts/${id}`).catch(e=>e)
  }

  public getAllPosts(id:number):Promise<AxiosResponse<Post[]>> {
    return Axios.get(`${this.baseURL}/posts/`).catch(e=>e)
  }

  public getCommentsByPost(id:number):Promise<AxiosResponse> {
    return Axios.get(`${this.getBaseURL()}/posts/${id}/comments`).catch(e=>e)
  }

  public createPost(post:Post):Promise<AxiosResponse> {
    return Axios.post(`${this.getBaseURL()}/posts/`, post).catch(e=>e)
  }

  public updatePost(update):Promise<AxiosResponse> {
    return Axios.put(`${this.getBaseURL()}/posts`, update).catch(e=>e)
  }

  public patchPost(update):Promise<AxiosResponse> {
    return Axios.patch(`${this.getBaseURL()}/posts`, update).catch(e=>e)
  }

  public deletePost(id:number):Promise<AxiosResponse> {
    return Axios.delete(`${this.getBaseURL()}/posts/${id}`).catch(e=>e)
  }
}

export default JSONWrapper