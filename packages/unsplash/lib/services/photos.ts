import {
  BasicQuery,
  RandomQuery,
  SearchQuery,
} from '../models/ParamTypes';
import { RequestLib } from '../../../core/lib/models/types';
import { AxiosPromise } from 'axios';

export const photos = (request: RequestLib) => {
  const basePath = '/photos';

  const get = <T = any>(path: string, config = {}): AxiosPromise => {
    return request.get<T>(`${basePath}${path}`, config);
  };

  const getAll = (params: BasicQuery = {}): AxiosPromise => {
    return request.get(`${basePath}`, { params });
  };

  const getRandom = (params: RandomQuery = {}): AxiosPromise => {
    return get(`/random`, { params });
  };

  const getById = (id: string): AxiosPromise => {
    return get(`/${id}`);
  };

  const getPhotoStatistics = (id: string): AxiosPromise => {
    return get(`/${id}/statistics`);
  };

  const trackDownload = (id: string): AxiosPromise => {
    return get(`/${id}/download`);
  };

  const updatePhoto = (id, params: any): AxiosPromise => {
    return request.put(`/${id}`, params);
  };

  const likePhoto = (id: string): AxiosPromise => {
    return get(`/${id}/like`);
  };

  const unLikePhoto = (id: string): AxiosPromise => {
    return request.del(`/${id}/like`);
  };

  const search = (params: SearchQuery): AxiosPromise => {
    return request.get(`/search/photos`, { params });
  };

  return {
    getRandom,
    getById,
    getPhotoStatistics,
    trackDownload,
    updatePhoto,
    likePhoto,
    unLikePhoto,
    getAll,
    search,
  };
};
