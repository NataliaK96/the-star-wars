import {request} from './request';

export const getPeople = () => 
request('/api/people/', {
    method: 'GET',
  });

