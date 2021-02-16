import { Album } from '../models/Album';
import { Photo } from '../models/Photo';
import { createNested, getBaseFunctions } from './base.req';

export const albums = (baseURL) => {
  const nestedPaths: string[] = ['/photos'];
  return {
    ...getBaseFunctions<Album>('/Albums')(baseURL),
    createPhoto: createNested<Photo>('/Albums')(baseURL.url)(
      nestedPaths[0],
    ),
  };
};
