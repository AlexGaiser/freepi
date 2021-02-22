import { AxiosRequestConfig } from 'axios';
import { Comment } from '../models/Comment';
import { Post } from '../models/Post';
import { getBaseFunctions, createNested } from './base.req';

export const posts = (config: AxiosRequestConfig) => {
  const nestedPaths: string[] = ['/comments'];
  return {
    ...getBaseFunctions<Post>('/posts')(config),
    createComment: createNested<Comment>('/posts')(config.url)(
      nestedPaths[0],
    ),
  };
};
