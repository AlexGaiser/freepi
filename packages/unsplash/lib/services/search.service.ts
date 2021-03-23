import { AxiosPromise } from 'axios';
import { RequestLib } from '../../../core/lib/models/types';
import { SearchNamespace, PhotoQuery } from '../models/ParamTypes';

export const search = (request: RequestLib) => <T = PhotoQuery>(
  params: T,
  namespace: SearchNamespace = 'photos',
): AxiosPromise<any> => {
  const basePath = '/search';
  return request.get(`${basePath}/${namespace}`, { params });
};
