import {request} from './request';

export const getFilms = () => 
request('/api/films/', {
    method: 'GET',
  });

