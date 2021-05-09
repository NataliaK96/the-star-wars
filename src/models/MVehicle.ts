import { types } from 'mobx-state-tree'

export const MVehicle = types.model({
  name: types.string,
  model: types.string,
  vehicle_class: types.string,
  manufacturer: types.string,
  length: types.string,
  cost_in_credits: types.string,
  crew: types.string,
  passengers: types.string,
  max_atmosphering_speed: types.string,
  cargo_capacity: types.string,
  consumables: types.string,
  films: types.array(types.string),
  pilots: types.array(types.string),
  url: types.string,
  created: types.string,
  edited: types.string,
})
