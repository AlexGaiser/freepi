import { User } from '../models/User';
import { getBaseFunctions } from './base.req';

export const users = (baseURL) => {
  return {
    ...getBaseFunctions<User>('/users')(baseURL),
  };
};
