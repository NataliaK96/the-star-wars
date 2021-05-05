import { request } from './request';

export const getVehicles = () =>
  request('/api/vehicles/', {
    method: 'GET',
  });
