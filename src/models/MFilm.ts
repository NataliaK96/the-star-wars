import { types } from 'mobx-state-tree'

export const MFilm = types.model({
  title: types.string,
  episode_id: types.number,
  opening_crawl: types.string,
  director: types.string,
  producer: types.string,
  release_date: types.string,
  species: types.array(types.string),
  starships: types.array(types.string),
  vehicles: types.array(types.string),
  characters: types.array(types.string),
  planets: types.array(types.string),
  url: types.string,
  created: types.string,
  edited: types.string,
})
