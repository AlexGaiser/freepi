import { AxiosRequestConfig } from 'axios';
import { Photo } from '../models/Photo';
import { getBaseFunctions } from '../services/base.req';

export const photos = (config: AxiosRequestConfig) => {
  return {
    ...getBaseFunctions<Photo>('/photos')(config),
  };
};
