import { request } from './request';

export const getSpecies = (page: number = 1) =>
  request(`/api/species/?page=${page}`, {
    method: 'GET',
  });
