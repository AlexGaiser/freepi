import { BasicQuery, RandomQuery } from '../models/ParamTypes';

interface RequestLib {
  get: (path: string, config?) => any;
  post: (path: string, config?) => any;
  request: (config) => any;
}

export const photos = (request: RequestLib) => {
  const basePath = '/photos';

  const get = (path, config = {}) => {
    return request.get(`${basePath}${path}`, config);
  };

  const getAll = (params: BasicQuery = {}) => {
    return request.get(`${basePath}`, { params });
  };

  const getRandom = (params: RandomQuery = {}) => {
    return get(`/random`, { params });
  };

  const getById = (id: string) => {
    return get(`/${id}`);
  };

  const getPhotoStatistics = (id: string) => {
    return get(`/${id}/statistics`);
  };

  const trackDownload = (id: string) => {
    return get(`/${id}/download`);
  };

  const updatePhoto = (id: string) => {
    // waiting for put logic to be included
    return;
  };

  const likePhoto = (id: string) => {
    return get(`/${id}/like`);
  };

  const unLikePhoto = (id: string) => {
    // delete logic needs to be added to core librarys
    // return delete(`/${id}/like`);
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
  };
};
