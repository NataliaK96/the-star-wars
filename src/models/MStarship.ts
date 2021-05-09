import { types } from 'mobx-state-tree';

export const MStarship = types.model({
  name: types.string,
  model: types.string,
  starship_class: types.string,
  manufacturer: types.string,
  cost_in_credits: types.string,
  length: types.string,
  crew: types.string,
  passengers: types.string,
  max_atmosphering_speed: types.string,
  hyperdrive_rating: types.string,
  MGLT: types.string,
  cargo_capacity: types.string,
  consumables: types.string,
  films: types.array(types.string),
  pilots: types.array(types.string),
  url: types.string,
  created: types.string,
  edited: types.string,
});
