import { Photo } from '../models/Photo';
import { getBaseFunctions } from '../services/base.req';

export const photos = (baseURL) => {
  return {
    ...getBaseFunctions<Photo>('/photos')(baseURL)
  }
}