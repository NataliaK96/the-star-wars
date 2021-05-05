import {request} from './request';

export const getPlanets = () => 
request('/api/planets/', {
    method: 'GET',
  });

