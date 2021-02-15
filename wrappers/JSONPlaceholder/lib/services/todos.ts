import { AxiosRequestConfig } from 'axios';
import { Todo } from '../models/Todo';
import { getBaseFunctions } from './base.req';

export const todos = (config: AxiosRequestConfig) => {
  return {
    ...getBaseFunctions<Todo>('/todos')(config),
  };
};
