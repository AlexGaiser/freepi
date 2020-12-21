import { Todo } from '../models/Todo';
import { getBaseFunctions } from './base.req';

export const todos = (baseURL) => {
  return {
    ...getBaseFunctions<Todo>('/todos')(baseURL),
  };
};
