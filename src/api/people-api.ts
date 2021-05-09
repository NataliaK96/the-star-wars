import { request } from './request'

export const getPeople = (page: number = 1) =>
  request(`/api/people/?page=${page}`, {
    method: 'GET',
  })
