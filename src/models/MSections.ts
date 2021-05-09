import { types } from 'mobx-state-tree'

export const MSections = types.model({
  films: types.string,
  people: types.string,
  planets: types.string,
  species: types.string,
  starships: types.string,
  vehicles: types.string,
})
