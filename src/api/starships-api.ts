import { request } from './request'

export const getStarships = (page: number = 1) =>
  request(`/api/starships/?page=${page}`, {
    method: 'GET',
  })
