import { AxiosRequestConfig } from 'axios';
import { Album } from '../models/Album';
import { Photo } from '../models/Photo';
import { createNested, getBaseFunctions } from './base.req';

export const albums = (config: AxiosRequestConfig) => {
  const nestedPaths: string[] = ['/photos'];
  return {
    ...getBaseFunctions<Album>('/Albums')(config),
    createPhoto: createNested<Photo>('/Albums')(config.url)(
      nestedPaths[0],
    ),
  };
};
