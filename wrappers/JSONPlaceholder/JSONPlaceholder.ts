import Axios, { AxiosResponse } from 'axios';
import requests from '../../services/requests';
import { Post } from './models/Post';
import { Todo } from './models/Todo';
import { User } from './models/User';
import { todos } from './services/todos';
import { users } from './services/users';
import { posts } from './services/posts';
import { photos } from './services/photos';
import { comments } from './services/comments';
import { albums } from './services/albums';

const { get, post } = requests;
class JSONPlaceholder {
  private baseURL: string = 'https://jsonplaceholder.typicode.com';

  constructor() {
    // this.baseURL = 'https://jsonplaceholder.typicode.com'
  }

  public todos = todos({ url: this.getBaseURL() });
  public users = users({ url: this.getBaseURL() });
  public posts = posts({ url: this.getBaseURL() });
  public photos = photos({ url: this.getBaseURL() });
  public comments = comments({ url: this.getBaseURL() });
  public albums = albums({ url: this.getBaseURL() });

  public getBaseURL(): string {
    return this.baseURL;
  }

  public findTodos(params) {
    return get<Todo[]>(`${this.getBaseURL()}/todos`, { params });
  }

  public getTodoById(id: number) {
    return get<Todo>(`${this.baseURL}/todos/${id}`);
  }

  public getAllTodos() {
    return get<Todo[]>(`${this.baseURL}/todos/`);
  }

  public findPosts(params) {
    return get<Post[]>(`${this.getBaseURL()}/posts/`, { params });
  }

  public getPostById(id: number) {
    return get<Post>(`${this.baseURL}/posts/${id}`);
  }

  public getAllPosts() {
    return get<Post[]>(`${this.baseURL}/posts/`);
  }

  public getCommentsByPost(id: number) {
    return get<Post>(
      `${this.getBaseURL()}/posts/${id}/comments`,
    ).catch((e) => e.response);
  }

  public createPost(data: Post) {
    return post<Post>(`${this.getBaseURL()}/posts/`, { data });
  }

  public updatePost(update) {
    return Axios.put(`${this.getBaseURL()}/posts`, update).catch(
      (e) => e.response,
    );
  }

  public patchPost(update) {
    return Axios.patch(`${this.getBaseURL()}/posts`, update).catch(
      (e) => e,
    );
  }

  public deletePost(id: number) {
    return Axios.delete(`${this.getBaseURL()}/posts/${id}`).catch(
      (e) => e,
    );
  }

  public getAllUsers() {
    return get<User[]>(`${this.getBaseURL()}/users/`);
  }

  public findUsers(params) {
    return get<User[]>(`${this.getBaseURL()}/users/`, { params });
  }

  public getUserById(id: number) {
    return get<User>(`${this.getBaseURL()}/users/${id}`);
  }
}
export default JSONPlaceholder;
