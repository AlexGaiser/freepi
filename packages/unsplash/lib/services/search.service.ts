import { RequestLib } from '../../../core/lib/models/types';

export const search = (request: RequestLib) => <T>(path: string) => (
  params: T,
) => {
  const basePath = '/search';
  return request.get(`${basePath}${path}`, params);
};
