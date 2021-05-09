import { request } from './request';

export const getVehicles = (page: number = 1) =>
  request(`/api/vehicles/?page=${page}`, {
    method: 'GET',
  });
