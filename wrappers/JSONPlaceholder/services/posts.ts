import { Post } from '../models/Post';
import { getBaseFunctions } from './base.req';

export const posts = (baseURL) => {
  return {
    ...getBaseFunctions<Post>('/posts')(baseURL),
  };
};
