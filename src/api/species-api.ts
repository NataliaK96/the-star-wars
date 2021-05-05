import {request} from './request';

export const getSpecies = () => 
request('/api/species/', {
    method: 'GET',
  });

