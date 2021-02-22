import { AxiosRequestConfig } from 'axios';
import { Comment } from '../models/Comment';
import { getBaseFunctions } from './base.req';

export const comments = (config: AxiosRequestConfig) => {
  return {
    ...getBaseFunctions<Comment>('/comments')(config),
  };
};
