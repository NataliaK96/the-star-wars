import { request } from './request'

export const getPlanets = (page: number = 1) =>
  request(`/api/planets/?page=${page}`, {
    method: 'GET',
  })
