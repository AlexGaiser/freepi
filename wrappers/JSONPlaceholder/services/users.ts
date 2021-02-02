import { User } from '../models/User';
import { getBaseFunctions, createNested } from './base.req';

export const users = (baseURL) => {
  const nestedPaths: string[] = ["/albums", "/todos", "/posts"];
  return {
    ...getBaseFunctions<User>('/users')(baseURL),
    createAlbum: createNested<User>('/users')(baseURL.url)(nestedPaths[0]),
    createTodo: createNested<User>('/users')(baseURL.url)(nestedPaths[1]),
    createPost: createNested<User>('/users')(baseURL.url)(nestedPaths[2]),
  };
};
