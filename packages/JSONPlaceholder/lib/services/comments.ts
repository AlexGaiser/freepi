import { AxiosRequestConfig } from 'axios';
import { Comment } from '../models/Comment';
import { getBaseFunctions } from '../services/base.req';

export const comments = (config: AxiosRequestConfig) => {
  return {
    ...getBaseFunctions<Comment>('/comments')(config),
  };
};
