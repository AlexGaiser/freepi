import { Album } from '../models/Album';
import { getBaseFunctions } from '../services/base.req';

export const albums = (baseURL) => {
  return {
    ...getBaseFunctions<Album>('/Albums')(baseURL),
  };
};
