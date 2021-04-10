import { AxiosPromise, AxiosRequestConfig } from 'axios';

import { requests } from '@freepi/core';
const { get } = requests;

type IParam<Type> = {
  [Property in keyof Type]?: Type[Property];
};

export const find = <T>(path: string) => (baseURL: string) => (
  params: IParam<T>,
): AxiosPromise<T[]> => {
  return get<T[]>(`${baseURL}${path}`, { params });
};

export const getBaseFunctions = <T>(path: string) => ({
  url,
}: AxiosRequestConfig) => {
  return {
    find: find<T>(path)(url),
  };
};
