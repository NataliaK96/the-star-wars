import { request } from './request';

export const getSections = () =>
  request('/api/', {
    method: 'GET',
  });
