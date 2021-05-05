import {request} from './request';

export const getStarships = () => 
request('/api/starships/', {
    method: 'GET',
  });

