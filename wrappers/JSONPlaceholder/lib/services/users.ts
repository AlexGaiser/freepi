import { AxiosRequestConfig } from 'axios';
import { Album } from '../models/Album';
import { Post } from '../models/Post';
import { Todo } from '../models/Todo';
import { User } from '../models/User';
import { getBaseFunctions, createNested } from './base.req';

export const users = (config: AxiosRequestConfig) => {
  const nestedPaths: string[] = ['/albums', '/todos', '/posts'];
  return {
    ...getBaseFunctions<User>('/users')(config),
    createAlbum: createNested<Album>('/users')(config.url)(
      nestedPaths[0],
    ),
    createTodo: createNested<Todo>('/users')(config.url)(
      nestedPaths[1],
    ),
    createPost: createNested<Post>('/users')(config.url)(
      nestedPaths[2],
    ),
  };
};
