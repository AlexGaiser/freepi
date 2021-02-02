import { Album } from '../models/Album';
import { createNested, getBaseFunctions } from '../services/base.req';

export const albums = (baseURL) => {
  const nestedPaths: string[] = ["/albums"];
  return {
    ...getBaseFunctions<Album>('/Albums')(baseURL),
    createPhoto: createNested<Album>('/Albums')(baseURL.url)(nestedPaths[0]),
  }
}
